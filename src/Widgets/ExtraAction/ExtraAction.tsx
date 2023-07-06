import {Container} from "../Container/Container";
import "./extraAction.scss"
import {NavLink} from "react-router-dom";

export const ExtraAction = () => {
    return (
        <Container>
            <div className="extra_action" data-aos="fade-up">
                <p className="message">You can read other posts</p>
                <NavLink to={'/posts'} className="btn btn-outline-brown">Read more</NavLink>
            </div>
        </Container>
    )
}