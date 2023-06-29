import React from "react";
import "./h2.scss";

type H2Type = {
    children: string,
    color?: 'dark' | 'gold'
}

export const H2: React.FC<H2Type> = ({children, color = 'dark'}) => {
    return <h2 className={`h2 title ${color}`}>{children}</h2>
}