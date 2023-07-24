import {SearchField} from "./Component/SearchField";
import {useState} from "react";
import {useSearchParams} from "react-router-dom";

export const SearchFieldContainer = () => {
    const [searchedValue, setSearchedValue] = useState<string>('');
    const [params, setParams] = useSearchParams();

    const handleSubmit = () => {
        if (searchedValue.length > 0) {
            params.set('title', searchedValue);
            setParams(params);
        }
    }

    return <SearchField searchedValue={searchedValue} setSearchedValue={setSearchedValue} handleSubmit={handleSubmit}/>
}