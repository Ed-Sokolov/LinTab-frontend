import React from "react";
import "./h4.scss"

type H4Type = {
    children: string
}

export const H4: React.FC<H4Type> = ({children}) => {
    return <h4 className={`h4 title`}>{children}</h4>
}