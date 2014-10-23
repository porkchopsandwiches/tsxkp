module TSXKP {
    export module Dictionaries {
        export module Loaders {

            export interface ILoaderCallback {
                (error: any, dictionary: TSXKP.Dictionaries.IDictionary): void;
            }

            export interface ILoader {
                loaded: boolean;
                load (callback: ILoaderCallback): ILoader;
            }
        }
    }
}