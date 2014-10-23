module TSXKP {
    export module Validators {
        export interface IValidator {
            description: string;
            validate (value: any): boolean;
        }

        export interface IArrayValidator extends IValidator {
            validate (value: any[]): boolean;
        }

        export interface INumberValidator extends IValidator {
            validate (value: number): boolean;
        }
    }
}