import {Container} from "../Container/Container";
import React from "react";
import "./formPage.scss"

type FormPageTypes = {
    children: React.ReactElement | Array<React.ReactElement>
}

export const FormPage: React.FC<FormPageTypes> = ({children}) => {
    return (
        <div className="create_post">
            <Container>
                <div className="create_post_content">
                    {children}
                </div>
            </Container>
        </div>
    )
}