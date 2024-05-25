import { PropsWithChildren } from "react"

const Card = ({title, children}:PropsWithChildren<{title: string}>) => (
    <div className="py-2 border border-gray-200 rounded-md shadow bg-white">
        <div className="border-b border-gray-200 pb-3">
            <h3 className="ml-4 text-2xl font-semibold">{title}</h3>
        </div>
        <div className="p-4">
            {children}
        </div>
    </div>
)

export default Card