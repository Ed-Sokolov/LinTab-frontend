import React from "react";

type RightColumnTypes = {
    children: React.ReactElement | Array<React.ReactElement>
}

export const RightColumn: React.FC<RightColumnTypes> = ({children}) => {
    return (
        <li className="right_column">
            <ul className="posts_list">
                {children}
            </ul>
        </li>
    )
}