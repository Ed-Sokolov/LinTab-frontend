import "./sortList.scss"
import {SortTypes} from "../SortListContainer";
import React from "react";
import {SortItem} from "./SortItem/SortItem";

type SortListTypes = {
    currentSort: SortTypes;
}

export const SortList: React.FC<SortListTypes> = ({currentSort}) => {

    const getTo = (sort: string) => {
        return {
            pathname: '/posts/', search: `sort=${sort}`
        }
    }

    const getClass = (itemName: string) => `sort_link ${currentSort === itemName ? 'sort_active' : ''}`

    return (
        <div className="sort_content" data-aos="fade-left">
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <SortItem iconName={"sort_title_down"} link={getTo("title_down")} className={getClass("title_down")}/>
                    <SortItem iconName={"sort_title_up"} link={getTo("title_up")} className={getClass("title_up")}/>
                </ul>
                <p className="sort_name">by title</p>
            </div>
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <SortItem iconName={"sort_date_down"} link={getTo("date_down")} className={getClass("date_down")}/>
                    <SortItem iconName={"sort_date_up"} link={getTo("date_up")} className={getClass("date_up")}/>
                </ul>
                <p className="sort_name">by date</p>
            </div>
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <SortItem iconName={"sort_views_down"} link={getTo("views_down")} className={getClass("views_down")}/>
                    <SortItem iconName={"sort_views_up"} link={getTo("views_up")} className={getClass("views_up")}/>
                </ul>
                <p className="sort_name">by views</p>
            </div>
        </div>
    )
}