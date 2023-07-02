import "./sign.scss"
import {Promo} from "../../../Widgets/Promo/Promo";
import {Container} from "../../../Widgets/Container/Container";
import {SignInComponent} from "./SignIn/SignInComponent";
import {SignUpComponent} from "./SignUp/SignUpComponent";
import React from "react";

type SignTypes = {
    pageName: 'sign-in' | 'sign-up' | 'none'
}

export const Sign: React.FC<SignTypes> = ({pageName}) => {
    return (
        <div className="sign_wrapper">
            <Promo isWrapper={true}/>
            <Container>
                <div className={`sign ${pageName}`}>
                    <div className="sign_background">
                        <SignInComponent/>
                    </div>
                    <div className="empty_space"></div>
                    <div className="sign_background">
                        <SignUpComponent/>
                    </div>
                </div>
            </Container>
        </div>
    )
}