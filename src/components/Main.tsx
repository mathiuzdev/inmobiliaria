

interface MainProps {
    children: React.ReactNode
    clases: string
}

export const Main = ({ clases, children}: MainProps) => {
    return (
        <main className={clases} >
            <div >{children}</div>
        </main>


    )
}
