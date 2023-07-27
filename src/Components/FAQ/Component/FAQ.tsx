import "./faq.scss";
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {PointerDown} from "../../../Widgets/PointerDown/PointerDown";
import {H3} from "../../../Widgets/Headings/H3/H3";
import {H4} from "../../../Widgets/Headings/H4/H4";
import {NavLink} from "react-router-dom";

export const FAQ = () => {
    return (
        <div className={"faq_page"}>
            <div className="faq_wrapper">
                <div className="faq_content">
                    <Container>
                        <div className="faq_content_inner">
                            <H2>FAQ</H2>
                            <ul className="faq_list">
                                <li className={`faq_item`}>
                                    <div className="faq_item_title_wrapper">
                                        <H4>What’s it?</H4>
                                    </div>
                                    <div className="faq_item_content">
                                        <p className="faq_item_paragraph">
                                            This is a large developing project for blogging.
                                        </p>
                                        <p className="faq_item_paragraph">
                                            If you want to know about more the project more or updates you can move
                                            to <NavLink to={'/about'}>About</NavLink> and read about all this.
                                        </p>
                                    </div>
                                </li>
                                <li className={`faq_item`}>
                                    <div className="faq_item_title_wrapper">
                                        <H4>What can I do?</H4>
                                    </div>
                                    <div className="faq_item_content">
                                        <p className="faq_item_paragraph">
                                            You can:
                                        </p>
                                        <ul>
                                            <li>create posts, edit and delete them</li>
                                            <li>write comments and delete them</li>
                                            <li>register your profile, edit or delete it</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={`faq_item`}>
                                    <div className="faq_item_title_wrapper">
                                        <H4>Do I need to register?</H4>
                                    </div>
                                    <div className="faq_item_content">
                                        <p className="faq_item_paragraph">
                                            Yes, you need to do it because you need to be authorized to do something so
                                            you need to have an account.
                                        </p>
                                        <p className="faq_item_paragraph">
                                            If you want to register you can move to <NavLink to={'/sign-up'}>Sign
                                            Up</NavLink>
                                        </p>
                                    </div>
                                </li>
                                <li className={`faq_item`}>
                                    <div className="faq_item_title_wrapper">
                                        <H4>Do I need to login?</H4>
                                    </div>
                                    <div className="faq_item_content">
                                        <p className="faq_item_paragraph">
                                            Yes, you need to do it because if you’re unauthorized you can only watch
                                            content.
                                        </p>
                                        <p className="faq_item_paragraph">
                                            If you want to login you can move to <NavLink to={'/sign-in'}>Sign
                                            In</NavLink>
                                        </p>
                                    </div>
                                </li>
                                <li className={`faq_item`}>
                                    <div className="faq_item_title_wrapper">
                                        <H4>Can I leave my review?</H4>
                                    </div>
                                    <div className="faq_item_content">
                                        <p className="faq_item_paragraph">
                                            Yes, you can do it to help to improve this website so your review is very
                                            important for it.
                                        </p>
                                        <p className="faq_item_paragraph">
                                            If you want to leave your review you can move
                                            to <NavLink to={'/contact'}>Contact</NavLink>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <div className="faq_attention">
                    <Container>
                        <div className="faq_attention_inner">
                            <H3>Warning</H3>
                            <p className="faq_attention_text">
                                If you didn’t find the needed question, you can ask us and we make an answer as soon as
                                possible
                            </p>
                            <p className="faq_attention_moving">
                                Click HERE to move and make a question or scroll down
                            </p>
                            <PointerDown/>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}