import {SearchField} from "./Component/SearchField";
import {useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";

export const SearchFieldContainer = () => {
    const [searchedParams, setSearchedParams] = useSearchParams();

    const searchBtn = useRef<HTMLButtonElement>(null);

    const [searchedValue, setSearchedValue] = useState<string>(searchedParams.get('title') ?? '');

    const handleSubmit = () => {
        if (searchedValue.length > 0 && searchBtn.current) {
            searchedParams.set('title', searchedValue);
            setSearchedParams(searchedParams);
            searchBtn.current.blur();
        }
    }

    return <SearchField searchedValue={searchedValue} setSearchedValue={setSearchedValue} handleSubmit={handleSubmit}
                        searchBtn={searchBtn}/>
}