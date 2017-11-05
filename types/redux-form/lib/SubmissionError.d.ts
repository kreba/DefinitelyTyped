import { FormErrors } from "redux-form";

export interface SubmissionErrorConstructor<T> {
    new (errors?: FormErrors<T>): Error;
}

export declare const SubmissionError: SubmissionErrorConstructor<any>;
