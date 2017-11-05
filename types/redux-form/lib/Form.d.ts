import { Component, FormHTMLAttributes, FormEvent, FormEventHandler } from "react";
import { Dispatch } from "redux";
import { FormProps, FormSubmitHandler, Omit } from "redux-form";

interface FormSubmitProp {
    onSubmit?: FormSubmitHandler;
}

export type FormProps = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & FormSubmitProp;

declare class Form extends Component<FormProps> {}
