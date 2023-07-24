import {SortList} from "./Component/SortList";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

export type SortTypes = 'title_up' | 'title_down' | 'date_up' | 'date_down' | 'views_up' | 'views_down';

export const SortListContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const sortName = (searchParams.get('sort') ? searchParams.get('sort') : 'date_down') as SortTypes;

    const [currentSort, setCurrentSort] = useState<SortTypes>(sortName);

    useEffect(() => {
        switch (currentSort) {
            case 'title_up':
            case 'title_down':
            case 'date_up':
            case 'date_down':
            case 'views_up':
            case 'views_down':
                searchParams.set('sort', currentSort);
                setSearchParams(searchParams);
                break;
            default:
                setCurrentSort('date_down');
                break;
        }
    }, [currentSort, searchParams]);

    return <SortList currentSort={currentSort} setCurrentSort={setCurrentSort}/>
}