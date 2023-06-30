import "./sortList.scss"
import {UseSvg} from "../UseSvg/UseSvg";

export const SortList = () => {
    return (
        <ul className="sort_list">
            <li className="sort_item">
                <ul className="icons_list">
                    <li className="icon_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_title_down"} className={"sort_icon"}/>
                        </div>
                    </li>
                    <li className="icon_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_title_up"} className={"sort_icon"}/>
                        </div>
                    </li>
                </ul>
                <p className="sort_name">by title</p>
            </li>
            <li className="sort_item">
                <ul className="icons_list">
                    <li className="icon_item active">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_date_down"} className={"sort_icon"}/>
                        </div>
                    </li>
                    <li className="icon_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_date_up"} className={"sort_icon"}/>
                        </div>
                    </li>
                </ul>
                <p className="sort_name">by date</p>
            </li>
            <li className="sort_item">
                <ul className="icons_list">
                    <li className="icon_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_views_down"} className={"sort_icon"}/>
                        </div>
                    </li>
                    <li className="icon_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_views_up"} className={"sort_icon"}/>
                        </div>
                    </li>
                </ul>
                <p className="sort_name">by views</p>
            </li>
        </ul>
    )
}