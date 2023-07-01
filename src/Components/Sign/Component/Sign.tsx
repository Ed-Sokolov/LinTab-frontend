import "./sign.scss"
import {Promo} from "../../../Widgets/Promo/Promo";
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {Button} from "../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";

export const Sign = () => {
    return (
        <div className="sign_wrapper">
            <Promo isWrapper={true}/>
            <Container>
                <div className="sign_background">
                    <div className="sign_in__content">
                        <H2>Sign In</H2>
                        <form action="" className="sign_form">
                            <div className="form_group">
                                <label className="label" htmlFor="">Nickname</label>
                                <input type="text" className="input" placeholder="Nickname"/>
                            </div>
                            <div className="form_group">
                                <label className="label" htmlFor="">Password</label>
                                <input type="password" className="input" placeholder="Password"/>
                            </div>
                            <Button classes={"btn btn-outline-white btn_sign"} isDisabled={true}>sign in</Button>
                        </form>
                        <div className="switch">
                            <p className="text">You are here at the first time?</p>
                            <NavLink to={"#"} className="switch_link">
                                sign up
                                <UseSvg spriteName={"full_arrow_right"} className={"full_arrow_icon"}/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}