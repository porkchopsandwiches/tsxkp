module TSXKP {
    export module Dictionaries {

        export interface IAllCallback {
            (error: any, words: string[]): void;
        }

        export interface IDictionary {
            words: string[];
            random (count: number): string[];
        }

        export class Dictionary implements IDictionary {
            public words: string[];
            private length: number;

            constructor (words: string[]) {
                this.words = words;
                this.length = words.length;
            }

            public get (index: number): string {
                return this.words[index];
            }

            public random (count: number): string[] {
                var chosen: string[];
                var i: number;

                for (chosen = [], i = 0; i < count; ++i) {
                    chosen.push(TSXKP.Generator.getRandomArrayElement<string>(this.words));
                }

                return chosen;
            }
        }
    }
}