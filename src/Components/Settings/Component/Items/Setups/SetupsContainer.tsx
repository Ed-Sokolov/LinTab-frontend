import {Setups} from "./Component/Setups";
import {FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../../Hooks/hooks";
import {changePassword} from "../../../../../API/SettingsApi";

export const SetupsContainer = () => {
    const dispatch = useAppDispatch();

    const initValues = {
        old_password: '',
        new_password: '',
        new_password_confirmation: ''
    }

    const handleSubmit = (values: typeof initValues, actions: FormikHelpers<typeof initValues>) => {
        dispatch(changePassword(values));
    }

    return <Setups initValues={initValues} handleSubmit={handleSubmit}/>
}