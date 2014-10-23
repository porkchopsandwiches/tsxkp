module TSXKP {
    export module Configs {

        export class AppleID implements TSXKP.Configs.IConfig {
            public symbol_alphabet: string[]                            = SymbolAlphabets.AppleID;
            public separator_alphabet: string[]                         = SeparatorAlphabets.AppleID;
            public word_length_min: number                              = 5;
            public word_length_max: number                              = 7;
            public num_words: number                                    = 3;
            public separator_character_type: SeparatorCharacterType     = SeparatorCharacterType.Random;
            public padding_digits_before: number                        = 2;
            public padding_digits_after: number                         = 2;
            public padding_type: PaddingType                            = PaddingType.Fixed;
            public padding_character_type: PaddingCharacterType         = PaddingCharacterType.Random;
            public padding_characters_before: number                    = 1;
            public padding_characters_after: number                     = 1;
            public case_transform: CaseTransform                        = CaseTransform.Random;
            public random_function: IRandomGenerator                    = RandomGenerator;
            public random_increment_type: RandomIncrement               = RandomIncrement.Specific;
            public random_increment: number                             = 12;
            public character_substitutions: CharacterSubstitutions      = {};
        }
    }
}