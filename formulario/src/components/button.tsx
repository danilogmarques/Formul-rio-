// components/Button.tsx

type ButtonProps = {
    type?: "button" | "submit" | "reset"
    className?: string
    children: React.ReactNode
}

export function Button({
    type = "button",
    className,
    children
}: ButtonProps) {
    return (
        <button
            type={type}
            className={className}
        >
            {children}
        </button>
    )
}