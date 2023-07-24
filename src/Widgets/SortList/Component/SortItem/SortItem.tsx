import {UseSvg} from "../../../UseSvg/UseSvg";
import React from "react";
import "./sortItem.scss";
import {SortTypes} from "../../SortListContainer";

type SortItemTypes = {
    iconName: string;
    className: string;
    setSort: (value: SortTypes) => any;
    sortName: SortTypes;
}

export const SortItem: React.FC<SortItemTypes> = ({iconName, className, setSort, sortName}) => {
    return (
        <li className="sort_item">
            <div className={className} onClick={() => setSort(sortName)}>
                <div className="sort_icon_wrapper">
                    <UseSvg spriteName={iconName} className={"sort_icon"}/>
                </div>
            </div>
        </li>
    )
}