import {H2} from "../../../../Widgets/Headings/H2/H2";
import {Button} from "../../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../../Widgets/UseSvg/UseSvg";
import React from "react";

type SignUpComponentTypes = {
    setPage: React.Dispatch<React.SetStateAction<'sign-in' | 'sign-up' | 'none'>>
}

export const SignUpComponent: React.FC<SignUpComponentTypes> = ({setPage}) => {
    return (
        <div className="sign__content right">
            <H2>Sign Up</H2>
            <form action="" className="sign_form">
                <div className="form_group">
                    <label className="label" htmlFor="">Nickname</label>
                    <input type="text" className="input" placeholder="Nickname"/>
                </div>
                <div className="form_group">
                    <label className="label" htmlFor="">Email</label>
                    <input type="email" className="input" placeholder="Email"/>
                </div>
                <div className="form_group">
                    <label className="label" htmlFor="">Password</label>
                    <input type="password" className="input" placeholder="Password"/>
                </div>
                <Button classes={"btn btn-outline-white btn_sign"} isDisabled={true}>sign up</Button>
            </form>
            <div className="switch">
                <p className="text">You have an account?</p>
                <div className="switch_link" onClick={() => setPage('sign-in')}>
                    <UseSvg spriteName={"full_arrow_left"} className={"full_arrow_icon"}/>
                    sign in
                </div>
            </div>
        </div>
    )
}