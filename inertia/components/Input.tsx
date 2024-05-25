import { InputHTMLAttributes } from "react";

const Input = ({type = 'text', className = '', ...props}: InputHTMLAttributes<HTMLInputElement> 
& {isFocused?: false}) => (
    <input type={type} 
        className={`mt-2 border w-full border-gray-200 p-2 rounded-md ${className}`} 
        {...props}/>
)

export default Input;