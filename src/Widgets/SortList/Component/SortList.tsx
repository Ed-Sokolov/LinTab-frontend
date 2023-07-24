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
                    <SortItem iconName={"sort_title_down"} className={getClass("title_down")} setSort={setCurrentSort}
                              sortName={"title_down"}/>
                    <SortItem iconName={"sort_title_up"} className={getClass("title_up")} setSort={setCurrentSort}
                              sortName={"title_up"}/>
                </ul>
                <p className="sort_name">by title</p>
            </div>
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <SortItem iconName={"sort_date_down"} className={getClass("date_down")} setSort={setCurrentSort}
                              sortName={"date_down"}/>
                    <SortItem iconName={"sort_date_up"} className={getClass("date_up")} setSort={setCurrentSort}
                              sortName={"date_up"}/>
                </ul>
                <p className="sort_name">by date</p>
            </div>
            <div className="sort_list_wrapper">
                <ul className="sort_list">
                    <SortItem iconName={"sort_views_down"} className={getClass("views_down")} setSort={setCurrentSort}
                              sortName={"views_down"}/>
                    <SortItem iconName={"sort_views_up"} className={getClass("views_up")} setSort={setCurrentSort}
                              sortName={"views_up"}/>
                </ul>
                <p className="sort_name">by views</p>
            </div>
        </div>
    )
}