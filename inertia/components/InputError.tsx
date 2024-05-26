import { HTMLAttributes } from "react";

const InputError = ({message, className = '', ...props}:HTMLAttributes<HTMLParagraphElement> & {message?: string}) => {
    return message ? (
        <p className={`text-sm text-red-500 ${className}`} {...props}>{message}</p>
    ) : null;
}

export default InputError;