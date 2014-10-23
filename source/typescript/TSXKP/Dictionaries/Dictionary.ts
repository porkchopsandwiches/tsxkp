module TSXKP {
    export module Dictionaries {

        export interface IAllCallback {
            (error: any, words: string[]): void;
        }

        export interface IDictionary {
            words: string[];
            random (): string;
        }

        export class Dictionary implements IDictionary {
            public words: string[];
            private length: number;
            public config: TSXKP.Configs.IConfig;

            constructor (words: string[], config: TSXKP.Configs.IConfig) {
                this.words = words;
                this.length = words.length;
                this.config = config;
            }

            public get (index: number): string {
                return this.words[index];
            }

            public random (): string {
                var random: number[];
                random = this.config.random_function(1);
                return this.words[Math.floor(random[0] * this.length)];
            }
        }
    }
}