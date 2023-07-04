import {JSX} from "react";

export type ActivatedItemType = 'avatar' | 'about' | 'privacy' | 'setups';

export type ContentsType = {
    avatar: JSX.Element;
    about: JSX.Element;
    privacy: JSX.Element;
    setups: JSX.Element;
}