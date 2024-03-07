interface Children{
    children: React.ReactNode,
    clases: string
}


export const Layout = ({children, clases}: Children) => {
  return (
    <div className={clases}>{children}</div>
  )
}
