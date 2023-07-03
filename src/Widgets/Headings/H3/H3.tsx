import React from "react";
import "./h3.scss"

type H3Type = {
    children: string
}

export const H3: React.FC<H3Type> = ({children}) => {
    return <h3 className={`h3 title`}>{children}</h3>
}