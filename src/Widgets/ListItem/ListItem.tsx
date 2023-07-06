import React from "react";
import {UseSvg} from "../UseSvg/UseSvg";
import "./listItem.scss"

type ListItemTypes = {
    text: string
}

export const ListItem: React.FC<ListItemTypes> = ({text}) => {
    return (
        <li className="list_custom_item">
            <UseSvg spriteName={"list_style_item"} className={"list_custom_item_icon"}/>
            <span className="list_custom_item_text">{text}</span>
        </li>
    )
}