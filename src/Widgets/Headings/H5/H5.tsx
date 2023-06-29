import React from "react";
import "./h5.scss"

type H5Type = {
    children: string
}

export const H5: React.FC<H5Type> = ({children}) => {
    return <h5 className={`h5 title`}>{children}</h5>
}