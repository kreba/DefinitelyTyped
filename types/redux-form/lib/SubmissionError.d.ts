import { ReactNode } from "react";
import { FormErrors } from "redux-form";

export interface SubmissionErrorConstructor {
    new <TFieldName = string, TErrValue = ReactNode>(errors?: FormErrors<TFieldName, TErrValue>): Error;
}

export declare const SubmissionError: SubmissionErrorConstructor;
