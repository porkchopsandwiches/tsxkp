module TSXKP {
    export module Configs {
        export interface ISeparatorAlphabets {
        }

        export class SeparatorAlphabets implements ISeparatorAlphabets {
            static Standard: string[] = ["-", "+", "=", ".", "*", "_", "|", "~", ","];
            static AppleID: string[] = ["-", ":", ".", ","];
        }
    }
}