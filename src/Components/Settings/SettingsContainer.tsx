import React, {useEffect, useState} from "react";
import {Settings} from "./Component/Settings";
import {useNavigate, useParams} from "react-router-dom";
import {Privacy} from "./Component/Items/Privacy/Privacy";
import {Setups} from "./Component/Items/Setups/Setups";
import {ActivatedItemType, ContentsType} from "./Types";
import {useAppDispatch, useAppSelector} from "../../Hooks/hooks";
import {getUser} from "../../API/UserApi";
import {AboutContainer} from "./Component/Items/About/AboutContainer";
import {AvatarContainer} from "./Component/Items/Avatar/AvatarContainer";

export const SettingsContainer = () => {
    let {profileId} = useAppSelector(state => state.auth);
    let user = useAppSelector(state => state.user.user);

    const dispatch = useAppDispatch();

    let [activatedItem, setActivatedItem] = useState<ActivatedItemType>('avatar');

    const navigate = useNavigate();

    let {item} = useParams();

    useEffect(() => {
        if (profileId) {
            dispatch(getUser(profileId));
        }
    }, [profileId, dispatch]);

    useEffect(() => {
        switch (item) {
            case undefined:
                navigate('/settings/avatar', {replace: true});
                break;
            case 'avatar':
            case 'about':
            case 'privacy':
            case 'setups':
                setActivatedItem(item);
                break;
            default:
                navigate('/', {replace: true});
                break;
        }
    }, [item, navigate]);

    const contents: ContentsType = {
        avatar: <AvatarContainer user={user}/>,
        about: <AboutContainer user={user}/>,
        privacy: <Privacy/>,
        setups: <Setups/>
    }

    return user && <Settings activatedItem={activatedItem} contents={contents}/>
}