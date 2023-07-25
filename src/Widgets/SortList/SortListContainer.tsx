import {SortList} from "./Component/SortList";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

export type SortTypes = 'title' | 'title,desc' | 'date' | 'date,desc' | 'views' | 'views,desc';

export const SortListContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const sortName: SortTypes = (searchParams.get('sort') ?? 'date') as SortTypes;

    const [currentSort, setCurrentSort] = useState<SortTypes>(sortName);

    useEffect(() => {
        switch (currentSort) {
            case 'title':
            case 'title,desc':
            case 'date':
            case 'date,desc':
            case 'views':
            case 'views,desc':
                if (currentSort !== sortName) {
                    searchParams.set('sort', currentSort);
                    setSearchParams(searchParams);
                }
                break;
            default:
                setCurrentSort('date');
                break;
        }
    }, [currentSort, searchParams]);

    return <SortList currentSort={currentSort} setCurrentSort={setCurrentSort}/>
}