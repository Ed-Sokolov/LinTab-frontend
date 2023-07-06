import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../Store";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useIsShowComponent = () => {
    let [isShowComponent, setIsShowComponent] = useState<boolean>(true);

    let pathname = useLocation().pathname;

    useEffect(() => {
        switch (pathname) {
            case '/sign-in':
            case '/sign-up':
                setIsShowComponent(false);
                break;
            default:
                setIsShowComponent(true);
                break;
        }
    }, [pathname])

    return isShowComponent;
}