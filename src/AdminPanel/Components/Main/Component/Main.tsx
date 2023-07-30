import "./main.scss";
import {StatisticCard} from "../../../Widgets/StatisticCard/StatisticCard";

export const Main = () => {
    return (
        <div>
            <ul className="statistics__list">
                <li className="statistic__item">
                    <StatisticCard title={"Posts"} count={10} link={"#"} backgroundColor={"pink"}/>
                </li>
                <li className="statistic__item">
                    <StatisticCard title={"Projects"} count={0} link={"#"} backgroundColor={"green"}/>
                </li>
                <li className="statistic__item">
                    <StatisticCard title={"About"} count={4} link={"#"} backgroundColor={"orange"}/>
                </li>
                <li className="statistic__item">
                    <StatisticCard title={"Contact"} count={6} link={"#"} backgroundColor={"blue"}/>
                </li>
                <li className="statistic__item">
                    <StatisticCard title={"FAQ"} count={4} link={"#"} backgroundColor={"violet"}/>
                </li>
            </ul>
        </div>
    )
}