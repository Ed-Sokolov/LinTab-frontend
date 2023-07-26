import "./contact.scss";
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import React from "react";
import {LeaveFeedbackContainer} from "../../../Widgets/LeaveFeedback/LeaveFeedbackContainer";

export const Contact: React.FC = () => {
    return (
        <div className={"contact_page"}>
            <Container>
                <H2>Contact</H2>
                <LeaveFeedbackContainer/>
            </Container>
        </div>
    )
}