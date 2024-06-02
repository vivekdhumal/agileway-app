import { PropsWithChildren } from "react"

const Card = ({title, children, className = ''}:PropsWithChildren<{title?: string, className?: string}>) => (
    <div className={`py-2 border w-3/4 border-gray-200 rounded-md shadow bg-white ${className}`}>
        { title && (
            <div className="border-b border-gray-200 py-2">
                <h3 className="ml-4 text-xl font-semibold text-gray-600">{title}</h3>
            </div>
        )}
        <div className="p-4">
            {children}
        </div>
    </div>
)

export default Card