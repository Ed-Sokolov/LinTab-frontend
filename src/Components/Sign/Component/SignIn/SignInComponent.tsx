import {H2} from "../../../../Widgets/Headings/H2/H2";
import {Button} from "../../../../Widgets/Button/Button";
import {NavLink} from "react-router-dom";
import {UseSvg} from "../../../../Widgets/UseSvg/UseSvg";
import React from "react";

type SignInComponentTypes = {
    setPage: React.Dispatch<React.SetStateAction<'sign-in' | 'sign-up' | 'none'>>
}

export const SignInComponent: React.FC<SignInComponentTypes> = ({setPage}) => {
    return (
        <div className="sign__content">
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
                <div className="switch_link" onClick={() => setPage('sign-up')}>
                    sign up
                    <UseSvg spriteName={"full_arrow_right"} className={"full_arrow_icon"}/>
                </div>
            </div>
        </div>
    )
}