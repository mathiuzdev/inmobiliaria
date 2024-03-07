interface MainProps {
    children: React.ReactNode
    clases: string
}

export const Main = ({ clases, children}: MainProps) => {
    return (
        <main className="flex justify-center">
            <div className={clases}>{children}</div>
        </main>

    )
}
