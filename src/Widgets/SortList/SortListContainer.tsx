import {SortList} from "./Component/SortList";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

export type SortTypes = 'title_up' | 'title_down' | 'date_up' | 'date_down' | 'views_up' | 'views_down';

export const SortListContainer = () => {
    const [currentSort, setCurrentSort] = useState<SortTypes>('date_down');

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const param = searchParams.get('sort');

        switch (param) {
            case 'title_up':
            case 'title_down':
            case 'date_up':
            case 'date_down':
            case 'views_up':
            case 'views_down':
                setCurrentSort(param);
                break;
            default:
                setCurrentSort('date_down');
                break;
        }
    }, [currentSort, searchParams]);

    return <SortList currentSort={currentSort}/>
}