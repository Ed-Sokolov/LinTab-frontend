import React from "react";
import {NavLink} from "react-router-dom";
import "./statisticCard.scss";

type StatisticCardTypes = {
    title: string;
    count: number;
    link: string;
    backgroundColor: 'green' | 'pink' | 'orange' | 'blue' | 'violet';
}

export const StatisticCard: React.FC<StatisticCardTypes> = ({title, count, link, backgroundColor}) => {
    return (
        <div className={`statistic_card ${backgroundColor}`}>
            <h4 className="statistic_card__title">{title}</h4>
            <p className="statistic_card__count">{count}</p>
            <div className="statistic_card__link-wrapper">
                <NavLink to={link} className={"statistic_card__link"}>More</NavLink>
            </div>
        </div>
    )
}