import {Setups} from "./Component/Setups";
import {FormikHelpers} from "formik";

export const SetupsContainer = () => {
    const initValues = {
        old_password: '',
        new_password: '',
        password_confirmation: ''
    }

    const handleSubmit = (values: typeof initValues, actions: FormikHelpers<typeof initValues>) => {
        console.log(values);
    }

    return <Setups initValues={initValues} handleSubmit={handleSubmit}/>
}