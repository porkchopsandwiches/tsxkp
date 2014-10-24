module TSXKP {

    /**
     * @interface TSXKP.IGeneratorCallback
     *
     * Models a valid callback to a Generator.generate() call.
     *
     * @param {*}       error
     * @param {string}  password
     */
    export interface IGeneratorCallback {
        (error: any, password?: string): void;
    }

    /**
     * @interface TSXKP.IGenerator
     */
    export interface IGenerator {
        generate (callback: IGeneratorCallback): IGenerator;
    }

    /**
     * @class TSXKP.Generator
     */
    export class Generator implements IGenerator {
        private loader: TSXKP.Dictionaries.Loaders.ILoader;
        private config: TSXKP.Configs.IConfig;

        /**
         * @param {TSXKP.Dictionaries.Loaders.ILoader}      loader
         * @param {TSXKP.Configs.IConfig}                   config
         */
        constructor (loader: TSXKP.Dictionaries.Loaders.ILoader, config: TSXKP.Configs.IConfig) {
            this.config = config;
            this.loader = loader;
        }


        /**
         * Selects a random element from an array.
         *
         * @param {T[]}     array
         *
         * @returns {T}
         */
        static getRandomArrayElement<T> (array: T[]): T {
            return array[Math.floor(Math.random() * array.length)];
        }

        /**
         * Generates a string of random digits.
         *
         * @param {number}      length      Length of string to generate
         *
         * @returns {string}
         */
        private getRandomDigits (length: number): string {
            var digits: string[];
            var i: number;
            for (digits = [], i = 0; i < length; ++i) {
                digits.push(Generator.getRandomArrayElement<string>(TSXKP.Configs.SymbolAlphabets.Numbers));
            }

            return digits.join("");
        }

        /**
         * Transforms a word based on the passed CaseTransform.
         *
         * @param {string}                      word
         * @param {TSXKP.Configs.CaseTransform} case_transform
         *
         * @returns {string}
         */
        private transformWordCase (word: string, case_transform: TSXKP.Configs.CaseTransform): string {
            switch (case_transform) {
                case TSXKP.Configs.CaseTransform.Lower:
                    return word.toLocaleLowerCase();
                case TSXKP.Configs.CaseTransform.Upper:
                    return word.toLocaleUpperCase();
                case TSXKP.Configs.CaseTransform.Capitalise:
                    return word.length ? word[0].toLocaleUpperCase() + word.substr(1).toLocaleLowerCase() : word;
                case TSXKP.Configs.CaseTransform.Invert:
                    return word.length ? word[0].toLocaleLowerCase() + word.substr(1).toLocaleUpperCase() : word;
                default:
                    return word;
            }
        }

        /**
         * Transforms an array of words based on the passed CaseTransform.
         * Uses the current config's CaseTransform if none is passed.
         *
         * @param {string[]}                    words
         * @param {TSXKP.Configs.CaseTransform} case_transform
         *
         * @returns {string[]}
         */
        private transformCase (words: string[], case_transform: TSXKP.Configs.CaseTransform = this.config.case_transform): string[] {
            var i: number;
            var l: number;

            for (i = 0, l = words.length; i < l; ++i) {
                switch (case_transform) {
                    case TSXKP.Configs.CaseTransform.Alternate:
                        words[i] = this.transformWordCase(words[i], i % 2 === 0 ? TSXKP.Configs.CaseTransform.Lower : TSXKP.Configs.CaseTransform.Upper);
                        break;
                    case TSXKP.Configs.CaseTransform.Random:
                        words[i] = this.transformWordCase(words[i], Math.random() < 0.5 ? TSXKP.Configs.CaseTransform.Lower : TSXKP.Configs.CaseTransform.Upper);
                        break;
                    default:
                        words[i] = this.transformWordCase(words[i], this.config.case_transform);
                        break;
                }
            }

            return words;
        }

        /**
         * Selects a separator to use based on the passed SeparatorCharacterType.
         * Uses the current config's SeparatorCharacterType if none is passed.
         *
         * @param {TSXKP.Configs.SeparatorCharacterType}    separator_character_type
         *
         * @returns {string}
         */
        private getSeparator (separator_character_type: TSXKP.Configs.SeparatorCharacterType = this.config.separator_character_type): string {
            switch (separator_character_type) {
                case TSXKP.Configs.SeparatorCharacterType.Specific:
                    return this.config.separator_character;
                case TSXKP.Configs.SeparatorCharacterType.Random:
                    return Generator.getRandomArrayElement<string>(this.config.separator_alphabet);
                case TSXKP.Configs.SeparatorCharacterType.None:
                default:
                    return "";
            }
        }

        /**
         * Selects a character to use as padding based on the passed PaddingCharacterType.
         * Uses the current config's PaddingCharacterType if none is passed.
         *
         * @param {TSXKP.Configs.PaddingCharacterType}    padding_character_type
         *
         * @returns {string}
         */
        private getPaddingCharacter (padding_character_type: TSXKP.Configs.PaddingCharacterType = this.config.padding_character_type): string {
            switch (padding_character_type) {
                case TSXKP.Configs.PaddingCharacterType.Specific:
                    return this.config.padding_character;
                case TSXKP.Configs.PaddingCharacterType.Separator:
                    return this.getSeparator();
                case TSXKP.Configs.PaddingCharacterType.Random:
                    return Generator.getRandomArrayElement<string>(this.config.symbol_alphabet);
                case TSXKP.Configs.PaddingCharacterType.None:
                default:
                    return "";
            }
        }

        /**
         * Generates a password based on the current configuration, and returns it to the passed callback. Chainable.
         *
         * @param {TSXKP.IGeneratorCallback}    callback
         *
         * @returns {TSXKP.Generator}
         */
        public generate (callback: IGeneratorCallback): Generator {
            var words: string[];
            var separator: string;
            var padding_char: string;
            var password: string;
            var i: number;

            this.loader.load((error: any, dictionary: TSXKP.Dictionaries.IDictionary) => {

                if (error) {
                    return callback(error);
                }

                // Generate elements
                words = dictionary.random(this.config.num_words);
                words = this.transformCase(words);
                separator = this.getSeparator();
                padding_char = this.getPaddingCharacter();

                // Compile
                password = words.join(separator);

                // Add numbers
                if (this.config.padding_digits_before) {
                    password = this.getRandomDigits(this.config.padding_digits_before) + separator + password;
                }
                if (this.config.padding_digits_after) {
                    password += separator + this.getRandomDigits(this.config.padding_digits_after);
                }

                // Add padding characters
                switch (this.config.padding_type) {
                    case TSXKP.Configs.PaddingType.Adaptive:

                        // If password is too short
                        while (password.length < this.config.pad_to_length) {
                            password = padding_char + password;
                        }
                        if (password.length > this.config.pad_to_length) {
                            password = password.substr(0, this.config.pad_to_length);
                        }
                        break;
                    case TSXKP.Configs.PaddingType.Fixed:
                        for (i = 0; i < this.config.padding_characters_before; ++i) {
                            password = padding_char + password;
                        }
                        for (i = 0; i < this.config.padding_characters_after; ++i) {
                            password += padding_char;
                        }
                        break;
                }

                console.log(password);

                return callback(undefined, password);
            });

            return this;
        }
    }
}