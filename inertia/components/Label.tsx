import { LabelHTMLAttributes } from "react"

const Label = ({value, children, className = '', ...props}: LabelHTMLAttributes<HTMLLabelElement> & {value?: string}) => (
    <label className={`font-semibold text-gray-500 ${className} `} {...props}>{value? value: children}</label>
)

export default Label