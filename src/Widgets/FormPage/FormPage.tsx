import {Container} from "../Container/Container";
import React from "react";
import "./formPage.scss"

type FormPageTypes = {
    children: React.ReactElement | Array<React.ReactElement>
}

export const FormPage: React.FC<FormPageTypes> = ({children}) => {
    return (
        <div className="form_page">
            <Container>
                <div className="form_page_content">
                    {children}
                </div>
            </Container>
        </div>
    )
}