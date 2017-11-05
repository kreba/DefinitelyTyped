import { ReactNode } from "react";

export type FormErrors<TFieldName = string, TErrValue = ReactNode> = {
    [target in TFieldName & "_error"]?: TErrValue;
};

export type FormWarnings<TFieldName = string, TErrValue = ReactNode> = {
    [target in TFieldName & "_warning"]?: TErrValue;
};
