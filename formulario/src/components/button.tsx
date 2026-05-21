import { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
}

export function Button({
    type = "button",
    className,
    children,
    ...rest
}: ButtonProps) {
    return (
        <button
            type={type}
            className={className}
            {...rest}
        >
            {children}
        </button>
    )
}