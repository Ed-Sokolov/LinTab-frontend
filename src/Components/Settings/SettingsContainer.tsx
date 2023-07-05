import React, {useEffect, useState} from "react";
import {Settings} from "./Component/Settings";
import {useNavigate, useParams} from "react-router-dom";
import {Avatar} from "./Component/Items/Avatar/Avatar";
import {About} from "./Component/Items/About/About";
import {Privacy} from "./Component/Items/Privacy/Privacy";
import {Setups} from "./Component/Items/Setups/Setups";
import {AboutFormTypes, ActivatedItemType, ContentsType} from "./Types";
import {useAppDispatch, useAppSelector} from "../../Store/Hook/hook";
import {getUser} from "../../API/UserApi";
import {FormikHelpers} from "formik";
import {updateAbout} from "../../API/SettingsApi";

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
    }, [item, navigate]);

    const initValuesAbout: AboutFormTypes = {
        nickname: user?.nickname ? user.nickname : '',
        name: user?.name ? user.name : '',
        about: user?.about ? user.about : ''
    }

    const handleSubmitAbout = (values: AboutFormTypes, actions: FormikHelpers<AboutFormTypes>) => {
        console.log(values);

        dispatch(updateAbout(values));
    }

    const contents: ContentsType = {
        avatar: <Avatar/>,
        about: <About initValuesAbout={initValuesAbout} handleSubmitAbout={handleSubmitAbout}/>,
        privacy: <Privacy/>,
        setups: <Setups/>
    }

    return user && <Settings activatedItem={activatedItem} contents={contents}/>
}