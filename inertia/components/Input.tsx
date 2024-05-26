import { InputHTMLAttributes } from "react";

const Input = ({type = 'text', className = '', ...props}: InputHTMLAttributes<HTMLInputElement> 
& {isFocused?: false}) => (
    <input type={type} 
        className={`mt-2 text-sm border border-2 hover:border-indigo-500 focus:border-indigo-500 w-full border-gray-200 p-2 rounded-md ${className}`} 
        {...props}/>
)

export default Input;