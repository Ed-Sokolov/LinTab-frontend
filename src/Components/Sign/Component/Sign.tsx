import "./sign.scss"
import {Promo} from "../../../Widgets/Promo/Promo";
import {Container} from "../../../Widgets/Container/Container";
import {SignInComponent} from "./SignIn/SignInComponent";
import {SignUpComponent} from "./SignUp/SignUpComponent";

export const Sign = () => {
    return (
        <div className="sign_wrapper">
            <Promo isWrapper={true}/>
            <Container>
                <div className="sign_background right">
                    <SignUpComponent/>
                </div>
            </Container>
        </div>
    )
}