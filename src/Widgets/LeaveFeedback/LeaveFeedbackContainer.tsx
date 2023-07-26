import {LeaveFeedback} from "./Component/LeaveFeedback";
import {FormikHelpers} from "formik";


export type FeedbackFormTypes = {
    name: string;
    email: string;
    message: string;
}

export const LeaveFeedbackContainer = () => {
    const initValues: FeedbackFormTypes = {
        name: '',
        email: '',
        message: ''
    }

    const handleSubmit = (values: FeedbackFormTypes, actions: FormikHelpers<FeedbackFormTypes>) => {
        console.log(values);
    }

    return <LeaveFeedback initValues={initValues} handleSubmit={handleSubmit}/>
}