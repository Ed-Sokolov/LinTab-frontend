import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../UseSvg/UseSvg";
import React from "react";
import "./sortItem.scss";

type SortItemTypes = {
    iconName: string;
    link: { pathname: string, search: string };
    className: string;
}

export const SortItem: React.FC<SortItemTypes> = ({iconName, link, className}) => {
    return (
        <li className="sort_item">
            <NavLink to={link} className={className}>
                <div className="sort_icon_wrapper">
                    <UseSvg spriteName={iconName} className={"sort_icon"}/>
                </div>
            </NavLink>
        </li>
    )
}