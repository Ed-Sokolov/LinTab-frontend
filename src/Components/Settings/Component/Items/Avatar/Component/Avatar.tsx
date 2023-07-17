import {Avatar as UserAvatar} from "../../../../../../Widgets/Avatar/Avatar";
import "./avatar.scss";
import {Remove} from "../../../../../../Widgets/Remove/Remove";
import {DropzoneWrapper} from "../../../../../../Widgets/DropzoneWrapper/DropzoneWrapper";
import React from "react";
import {AvatarTypes} from "../../../../Types";
import {Form, Formik} from "formik";
import {AvatarSchema} from "../../../../Validation/Avatar";

export const Avatar: React.FC<AvatarTypes> = ({user, initValues, handleSubmit}) => {
    return (
        <div className={"settings_avatar_wrapper"}>
            <div className="settings_avatar">
                <UserAvatar size={"m"} avatar={user.avatar}/>
                <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={AvatarSchema}>
                    {
                        ({
                             values, errors, touched,
                             setFieldValue, setFieldTouched, submitForm, validateForm
                         }) => <Form>
                            <DropzoneWrapper setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}
                                             errorMessage={errors.avatar} isTouched={touched.avatar} id={"avatar"}
                                             file={values.avatar} size={"m"} fieldName={"avatar"}
                                             submitForm={submitForm} validateForm={validateForm}/>
                        </Form>
                    }
                </Formik>
            </div>
            <Remove text={"remove the avatar"} onEvent={() => 1}/>
        </div>
    )
}