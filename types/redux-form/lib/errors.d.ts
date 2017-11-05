import { ReactElement } from "react";

export interface ErrorOther<T = void> {
    _error?: T;
}

export type FormErrors<FormData = {}, T = void> = {
    [P in keyof FormData]?: ReactElement<any> | string | ErrorOther<T>;
};

export interface WarningOther<T = void> {
    _warning?: T;
}

export type FormWarnings<FormData = {}, T = void> = {
    [P in keyof FormData]?: ReactElement<any> | string | WarningOther<T>;
};
