// Type definitions for redux-form 7.0
// Project: https://github.com/erikras/redux-form
// Definitions by: Carson Full <https://github.com/carsonf>, Daniel Lytkin <https://github.com/aikoven>, Karol Janyst <https://github.com/LKay>, Luka Zakrajsek <https://github.com/bancek>, Alex Young <https://github.com/alsiola>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

export type FieldType = "Field" | "FieldArray";

export interface RegisteredFieldState {
    name: string;
    type: FieldType;
}


export type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export * from "redux-form/lib/actions";
export * from "redux-form/lib/actionTypes";
export * from "redux-form/lib/errors";
export * from "redux-form/lib/Field";
export * from "redux-form/lib/FieldArray";
export * from "redux-form/lib/Fields";
export * from "redux-form/lib/Form";
export * from "redux-form/lib/FormSection";
export * from "redux-form/lib/formValues";
export * from "redux-form/lib/formValueSelector";
export * from "redux-form/lib/reducer";
export * from "redux-form/lib/reduxForm";
export * from "redux-form/lib/selectors";
export * from "redux-form/lib/SubmissionError";
