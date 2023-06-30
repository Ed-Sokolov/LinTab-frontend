import React from "react";
import {Icons} from "../../Assets/Icons";

type UseSvgTypes = {
    spriteName: string;
    className: string;
    title?: string | false;
}

export const UseSvg: React.FC<UseSvgTypes> = ({title, className, spriteName}) => {
    return (
        <svg className={className} role="img">
            {title && <title>{title}</title>}
            <use xlinkHref={`${Icons}#${spriteName}`}/>
        </svg>
    )
}