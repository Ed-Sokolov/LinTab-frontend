import "./sign.scss"
import {Promo} from "../../../Widgets/Promo/Promo";
import {Container} from "../../../Widgets/Container/Container";
import {SignInComponent} from "./SignIn/SignInComponent";
import {SignUpComponent} from "./SignUp/SignUpComponent";
import {useEffect, useState} from "react";

export const Sign = () => {
    let [page, setPage] = useState<'sign-in' | 'sign-up' | 'none'>('none');

    const content = {
        'sign-in': 'left',
        'sign-up': 'right',
        'none': 'load',
    }

    useEffect(() => {
        setPage('sign-in')
    }, [])

    return (
        <div className="sign_wrapper">
            <Promo isWrapper={true}/>
            <Container>
                <div className={`sign ${content[page]}`}>
                    <div className="sign_background">
                        <SignInComponent setPage={setPage}/>
                    </div>
                    <div className="empty_space"></div>
                    <div className="sign_background">
                        <SignUpComponent setPage={setPage}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}