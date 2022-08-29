import React, {FormEvent, MouseEventHandler} from "react";

export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
export type TextareaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>
// export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>
export type SelectChangeEvent = React.ChangeEvent<HTMLSelectElement>
export type FormChangeEventHandler = FormEvent<HTMLFormElement>
export type MouseClickEventHandler = React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>