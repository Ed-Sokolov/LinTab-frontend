import React from "react";
import './container.scss';

type ContainerType = {
    children: React.ReactElement | Array<React.ReactElement>
}

export const Container: React.FC<ContainerType> = ({children}) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}