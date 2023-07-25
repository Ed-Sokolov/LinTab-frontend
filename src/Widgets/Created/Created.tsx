import React from "react";
import moment from "moment/moment";
import "./created.scss";

type CreatedTypes = {
    size?: 'l' | 'm';
    created_at: Date;
    updated_at: Date;
}

export const Created: React.FC<CreatedTypes> = ({size = 'm', created_at, updated_at}) => {
    return (
        <div className={`created_field ${size}`}>
            {
                created_at !== updated_at ?
                    <>{moment(updated_at).fromNow()} <span className={"edited"}>(edited)</span></> :
                    moment(created_at).fromNow()
            }
        </div>
    )
}