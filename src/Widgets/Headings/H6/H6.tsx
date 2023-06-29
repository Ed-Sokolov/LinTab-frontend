import React from "react";
import "./h6.scss"

type H6Type = {
    children: string
}

export const H6: React.FC<H6Type> = ({children}) => {
    return <h6 className={`h6 title`}>{children}</h6>
}