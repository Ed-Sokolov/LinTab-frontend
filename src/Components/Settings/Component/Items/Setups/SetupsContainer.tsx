import {Setups} from "./Component/Setups";
import {FormikHelpers} from "formik";
import {useAppDispatch} from "../../../../../Hooks/hooks";
import {changePassword, destroyUser} from "../../../../../API/SettingsApi";

export const SetupsContainer = () => {
    const dispatch = useAppDispatch();

    const initValues = {
        old_password: '',
        new_password: '',
        new_password_confirmation: ''
    }

    const handleSubmit = (values: typeof initValues, actions: FormikHelpers<typeof initValues>) => {
        dispatch(changePassword(values))
            .catch(errors => {
                for (const errorKey in errors) {
                    if (errorKey in values) {
                        actions.setFieldError(errorKey, errors[errorKey]);
                    }
                }
            });
    }

    const handleDestroyUser = () => {
        dispatch(destroyUser());
    }

    return <Setups initValues={initValues} handleSubmit={handleSubmit} handleDestroyUser={handleDestroyUser}/>
}