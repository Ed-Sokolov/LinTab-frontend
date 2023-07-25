import "./sortList.scss"
import {SortTypes} from "../SortListContainer";
import React from "react";
import {SortItem} from "./SortItem/SortItem";

type SortListTypes = {
    currentSort: SortTypes;
    setCurrentSort: (value: SortTypes) => any;
}

export const SortList: React.FC<SortListTypes> = ({currentSort, setCurrentSort}) => {
    const getClass = (itemName: string) => `sort_link ${currentSort === itemName ? 'active' : ''}`

    return (
        <div className="sort_content" data-aos="fade-left">
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <SortItem iconName={"sort_title_down"} className={getClass("title")} setSort={setCurrentSort}
                              sortName={"title"}/>
                    <SortItem iconName={"sort_title_up"} className={getClass("title,desc")} setSort={setCurrentSort}
                              sortName={"title,desc"}/>
                </ul>
                <p className="sort_name">by title</p>
            </div>
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <SortItem iconName={"sort_date_down"} className={getClass("date")} setSort={setCurrentSort}
                              sortName={"date"}/>
                    <SortItem iconName={"sort_date_up"} className={getClass("date,desc")} setSort={setCurrentSort}
                              sortName={"date,desc"}/>
                </ul>
                <p className="sort_name">by date</p>
            </div>
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <SortItem iconName={"sort_views_up"} className={getClass("views")} setSort={setCurrentSort}
                              sortName={"views"}/>
                    <SortItem iconName={"sort_views_down"} className={getClass("views,desc")} setSort={setCurrentSort}
                              sortName={"views,desc"}/>
                </ul>
                <p className="sort_name">by views</p>
            </div>
        </div>
    )
}