module TSXKP {

    export interface IGeneratorCallback {
        (error: any, password?: string): void;
    }

    export interface IGenerator {
        generate (callback: IGeneratorCallback): IGenerator;
    }

    export class Generator implements IGenerator {
        private loader: TSXKP.Dictionaries.Loaders.ILoader;
        private config: TSXKP.Configs.IConfig;

        constructor (loader: TSXKP.Dictionaries.Loaders.ILoader, config: TSXKP.Configs.IConfig) {
            this.config = config;
            this.loader = loader;
        }


        private getRandomArrayElement<T> (array: T[]): T {
            return array[Math.floor(Math.random() * array.length)];
        }

        private randomWords (count: number, dictionary: TSXKP.Dictionaries.IDictionary): string[] {
            var chosen: string[];
            chosen = [];

            while (chosen.length < count) {
                chosen.push(dictionary.random());
            }

            return chosen;
        }

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

        private transformCase (words: string[]): string[] {
            var i: number;
            var l: number;

            for (i = 0, l = words.length; i < l; ++i) {
                switch (this.config.case_transform) {
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

        private getSeparator (): string {
            switch (this.config.separator_character_type) {
                case TSXKP.Configs.SeparatorCharacterType.Specific:
                    return this.config.separator_character;
                case TSXKP.Configs.SeparatorCharacterType.Random:
                    return this.getRandomArrayElement<string>(this.config.separator_alphabet);
                case TSXKP.Configs.SeparatorCharacterType.None:
                default:
                    return "";
            }
        }

        private getPaddingCharacter (): string {
            switch (this.config.padding_character_type) {
                case TSXKP.Configs.PaddingCharacterType.Specific:
                    return this.config.padding_character;
                case TSXKP.Configs.PaddingCharacterType.Separator:
                    return this.getSeparator();
                case TSXKP.Configs.PaddingCharacterType.Random:
                    return this.getRandomArrayElement<string>(this.config.symbol_alphabet);
                case TSXKP.Configs.PaddingCharacterType.None:
                default:
                    return "";
            }
        }

        public generate (callback: IGeneratorCallback): Generator {
            //callback(undefined, "Hello, World!");
            var words: string[];
            var separator: string;
            var padding_char: string;
            var password: string;

            this.loader.load((error: any, dictionary: TSXKP.Dictionaries.IDictionary) => {

                if (error) {
                    return callback(error);
                }

                // Generate elements
                words = this.randomWords(this.config.num_words, dictionary);
                words = this.transformCase(words);
                separator = this.getSeparator();
                padding_char = this.getPaddingCharacter();

                // Compile
                password = words.join(separator);



                console.log(password);

                return callback(undefined, password);
            });

            return this;
        }
    }
}