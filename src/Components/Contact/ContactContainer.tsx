import {Contact} from "./Component/Contact";
import {FormikHelpers} from "formik";

export type ContactFormTypes = {
    name: string;
    email: string;
    message: string;
}

export const ContactContainer = () => {
    const initValues: ContactFormTypes = {
        name: '',
        email: '',
        message: ''
    }

    const handleSubmit = (values: ContactFormTypes, actions: FormikHelpers<ContactFormTypes>) => {
        console.log(values);
    }

    return <Contact initValues={initValues} handleSubmit={handleSubmit}/>
}