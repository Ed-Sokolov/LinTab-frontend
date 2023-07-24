import "./searchField.scss"
import {UseSvg} from "../../UseSvg/UseSvg";
import React from "react";

type SearchFieldTypes = {
    searchedValue: string;
    setSearchedValue: (value: string) => any;
    handleSubmit: () => any;
}

export const SearchField: React.FC<SearchFieldTypes> = ({searchedValue, setSearchedValue, handleSubmit}) => {
    return (
        <div className="search_field" data-aos="fade-right">
            <input className="search_input" type="text" placeholder="search by title"
                   onChange={e => setSearchedValue(e.target.value)} value={searchedValue}/>
            <button className="search_btn" disabled={!(searchedValue.length > 0)} onClick={handleSubmit}>
                <UseSvg spriteName={"search"} className={"search_icon"}/>
            </button>
        </div>
    )
}