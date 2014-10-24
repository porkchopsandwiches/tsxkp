module TSXKP {
    export module Configs {

        export class SimpleAppleID implements TSXKP.Configs.IConfig {
            public symbol_alphabet: string[]                            = SymbolAlphabets.AppleID;
            public separator_alphabet: string[]                         = SeparatorAlphabets.AppleID;
            public word_length_min: number                              = 4;
            public word_length_max: number                              = 8;
            public num_words: number                                    = 3;
            public separator_character_type: SeparatorCharacterType     = SeparatorCharacterType.None;
            public padding_digits_before: number                        = 0;
            public padding_digits_after: number                         = 2;
            public padding_type: PaddingType                            = PaddingType.None;
            public padding_character_type: PaddingCharacterType         = PaddingCharacterType.None;
            public case_transform: CaseTransform                        = CaseTransform.Capitalise;
            public character_substitutions: CharacterSubstitutions      = {};
        }
    }
}