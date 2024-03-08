interface ButtonCleanProps{
    title: string,
    className: string
}

export const ButtonClean = ({title, className}: ButtonCleanProps) => {
  return (
    <button className={className}>{title}</button>
  )
}
