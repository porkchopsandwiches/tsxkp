module TSXKP {
    export module Configs {
        export interface ISymbolAlphabets {
        }

        export class SymbolAlphabets implements ISymbolAlphabets {
            static Full: string[] = ["!", "@", "$", "%", "^", "&", "*", "-", "_", "+", "=", ":", "|", "~", "?"];
            static Small: string[] = ["!", "@", "$", "%", "^", "&", "*", "+", "=", ":", "|", "~", "?"];
            static AppleID: string[] = ["!", "?", "@", "&"];
            static Numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        }
    }
}