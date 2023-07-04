import React, {useEffect, useState} from "react";
import {Settings} from "./Component/Settings";
import {useNavigate, useParams} from "react-router-dom";
import {Avatar} from "./Component/Items/Avatar/Avatar";
import {About} from "./Component/Items/About/About";
import {Privacy} from "./Component/Items/Privacy/Privacy";
import {Setups} from "./Component/Items/Setups/Setups";
import {ActivatedItemType, ContentsType} from "./Types";

export const SettingsContainer = () => {
    let [activatedItem, setActivatedItem] = useState<ActivatedItemType>('avatar');

    const navigate = useNavigate();

    let {item} = useParams();

    useEffect(() => {
        switch (item) {
            case undefined:
                navigate('/settings/avatar', {replace: true});
                break;
            case 'avatar':
                setActivatedItem('avatar');
                break;
            case 'about':
                setActivatedItem('about');
                break;
            case 'privacy':
                setActivatedItem('privacy');
                break;
            case 'setups':
                setActivatedItem('setups');
                break;
            default:
                navigate('/', {replace: true});
                break;
        }
    }, [item, navigate])

    const contents: ContentsType = {
        avatar: <Avatar/>,
        about: <About/>,
        privacy: <Privacy/>,
        setups: <Setups/>
    }

    return <Settings activatedItem={activatedItem} contents={contents}/>
}