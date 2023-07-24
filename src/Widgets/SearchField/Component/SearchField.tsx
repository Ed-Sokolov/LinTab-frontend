import "./searchField.scss"
import {UseSvg} from "../../UseSvg/UseSvg";
import React from "react";

type SearchFieldTypes = {
    searchedValue: string;
    setSearchedValue: (value: string) => any;
    handleSubmit: () => any;
    searchBtn: React.RefObject<HTMLButtonElement>;
    searchInput: React.RefObject<HTMLInputElement>;
    isSearchedTitle: boolean;
    handleReset: () => any;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => any;
}

export const SearchField: React.FC<SearchFieldTypes> = (
    {
        searchedValue,
        setSearchedValue,
        handleSubmit,
        searchBtn,
        searchInput,
        isSearchedTitle,
        handleReset,
        handleKeyDown
    }
) => {
    return (
        <div className="search_field_wrapper" data-aos="fade-right">
            <div className="search_field">
                <input className="search_input" type="text" placeholder="search by title" ref={searchInput}
                       onChange={e => setSearchedValue(e.target.value)} value={searchedValue}
                       onKeyDown={handleKeyDown}/>
                <button className="search_btn" disabled={!isSearchedTitle && !(searchedValue.length > 0)}
                        onClick={handleSubmit}
                        ref={searchBtn}>
                    <UseSvg spriteName={"search"} className={"search_icon"}/>
                </button>
            </div>
            <div className={`reset ${isSearchedTitle ? '' : 'hide'}`} onClick={handleReset}>
                <UseSvg spriteName={"close_circle"} className={"reset_icon"}/>
            </div>
        </div>
    )
}