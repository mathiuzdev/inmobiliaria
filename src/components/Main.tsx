interface MainProps {
    children: React.ReactNode,
    className: string
}

export const Main = ({ children, className }: MainProps) => {
    return (
        <main className="flex justify-center">
            <div className={className}>{children} </div>

        </main>

    )
}
