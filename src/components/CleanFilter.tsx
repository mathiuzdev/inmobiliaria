// import { input } from "@nextui-org/theme"
import React from "react"


interface Title {
    title: string,
    classNameDiv: string,
    classNameTitle: string,
    children: React.ReactNode,
    input?: React.ReactNode,
    input2?: React.ReactNode
}


export const CleanFilter = ({ title, classNameDiv, classNameTitle, children, input, input2 }: Title) => {
    return (
        <>
            <div className={classNameDiv}>
                <h2 className={classNameTitle}>{title}</h2>
                {children}

            </div>
            {input}
            {input2}
        </>

    )
}
