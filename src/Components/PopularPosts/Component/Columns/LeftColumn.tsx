import React from "react";

type LeftColumnTypes = {
    children: React.ReactElement | Array<React.ReactElement>
}

export const LeftColumn: React.FC<LeftColumnTypes> = ({children}) => {
    return (
        <li className="left_column">
            <ul className="posts_list">
                {children}
            </ul>
        </li>
    )
}