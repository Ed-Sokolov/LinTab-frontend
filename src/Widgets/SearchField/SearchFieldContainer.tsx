import {SearchField} from "./Component/SearchField";
import React, {useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";

export const SearchFieldContainer = () => {
    const [searchedParams, setSearchedParams] = useSearchParams();

    const searchBtn = useRef<HTMLButtonElement>(null);
    const searchInput = useRef<HTMLInputElement>(null);

    const [searchedValue, setSearchedValue] = useState<string>(searchedParams.get('title') ?? '');

    const isSearchedTitle = !!searchedParams.get('title');

    const handleSubmit = () => {
        if (searchedValue.length > 0 && searchBtn.current) {
            searchedParams.set('title', searchedValue);
            setSearchedParams(searchedParams);
            searchBtn.current.blur();
        } else {
            searchedParams.delete('title');
            setSearchedParams(searchedParams);
        }
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            searchedParams.set('title', searchedValue);
            setSearchedParams(searchedParams);

            if (searchInput.current) {
                searchInput.current.blur();
            }
        }
    }

    const handleReset = () => {
        searchedParams.delete('title');
        setSearchedParams(searchedParams);
        setSearchedValue('');
    }

    return <SearchField searchedValue={searchedValue} setSearchedValue={setSearchedValue} handleSubmit={handleSubmit}
                        searchBtn={searchBtn} searchInput={searchInput} isSearchedTitle={isSearchedTitle}
                        handleReset={handleReset} handleKeyDown={handleKeyDown}/>
}