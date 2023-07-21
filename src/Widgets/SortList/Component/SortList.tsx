import "./sortList.scss"
import {UseSvg} from "../../UseSvg/UseSvg";

export const SortList = () => {
    return (
        <div className="sort_content" data-aos="fade-left">
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <li className="sort_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_title_down"} className={"sort_icon"}/>
                        </div>
                    </li>
                    <li className="sort_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_title_up"} className={"sort_icon"}/>
                        </div>
                    </li>
                </ul>
                <p className="sort_name">by title</p>
            </div>
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <li className="sort_item active">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_date_down"} className={"sort_icon"}/>
                        </div>
                    </li>
                    <li className="sort_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_date_up"} className={"sort_icon"}/>
                        </div>
                    </li>
                </ul>
                <p className="sort_name">by date</p>
            </div>
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <li className="sort_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_views_down"} className={"sort_icon"}/>
                        </div>
                    </li>
                    <li className="sort_item">
                        <div className="sort_icon_wrapper">
                            <UseSvg spriteName={"sort_views_up"} className={"sort_icon"}/>
                        </div>
                    </li>
                </ul>
                <p className="sort_name">by views</p>
            </div>
        </div>
    )
}