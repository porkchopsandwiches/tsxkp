module TSXKP {
    export module Configs {

        export class WPA2 implements TSXKP.Configs.IConfig {
            public symbol_alphabet: string[]                            = SymbolAlphabets.Small;
            public separator_alphabet: string[]                         = SeparatorAlphabets.Standard;
            public word_length_min: number                              = 4;
            public word_length_max: number                              = 8;
            public num_words: number                                    = 6;
            public separator_character_type: SeparatorCharacterType     = SeparatorCharacterType.Random;
            public padding_digits_before: number                        = 4;
            public padding_digits_after: number                         = 4;
            public padding_type: PaddingType                            = PaddingType.Adaptive;
            public padding_character_type: PaddingCharacterType         = PaddingCharacterType.Random;
            public pad_to_length: number                                = 63;
            public case_transform: CaseTransform                        = CaseTransform.Random;
            public character_substitutions: CharacterSubstitutions      = {};
        }
    }
}