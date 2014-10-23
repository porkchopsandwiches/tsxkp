module TSXKP {
    export module Configs {
        export interface ISymbolAlphabets {
        }

        export class SymbolAlphabets implements ISymbolAlphabets {
            static Full: string[] = ["!", "@", "$", "%", "^", "&", "*", "-", "_", "+", "=", ":", "|", "~", "?"];
            static Small: string[] = ["!", "@", "$", "%", "^", "&", "*", "+", "=", ":", "|", "~", "?"];
            static AppleID: string[] = ["!", "?", "@", "&"];
        }
    }
}