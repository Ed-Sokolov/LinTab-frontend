import "./faq.scss";
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {PointerDown} from "../../../Widgets/PointerDown/PointerDown";
import {H3} from "../../../Widgets/Headings/H3/H3";
import {AccordionContainer} from "../../../Widgets/Accordion/AccordionContainer";

export const FAQ = () => {
    const contents = [
        `<p>This is a large developing project for blogging.</p>
        <p>If you want to know about more the project more or updates you can move to <a href='/about' target="_blank">About</a> and read about all this.</p>`,
        `<p>
            You can:
        </p>
        <ul>
            <li>create posts, edit and delete them</li>
            <li>write comments and delete them</li>
            <li>register your profile, edit or delete it</li>
        </ul>`,
        `<p>
            Yes, you need to do it because you need to be authorized to do something so
            you need to have an account.
        </p>
        <p>
            If you want to register you can move to <a href='/sign-up' target="_blank">Sign
            Up</a>
        </p>`,
        `<p>
            Yes, you need to do it because if you’re unauthorized you can only watch
            content.
        </p>
        <p>
            If you want to login you can move to <a href='/sign-in' target="_blank">Sign
            In</a>
        </p>`,
        `<p>
            Yes, you can do it to help to improve this website so your review is very
            important for it.
        </p>
        <p>
            If you want to leave your review you can move
            to <a href='/contact' target="_blank">Contact</a>
        </p>`
    ]

    return (
        <div className={"faq_page"}>
            <div className="faq_wrapper">
                <div className="faq_content">
                    <Container>
                        <div className="faq_content_inner">
                            <H2>FAQ</H2>
                            <ul className="faq_list">
                                <AccordionContainer title={'What’s it?'} content={contents[0]}/>
                                <AccordionContainer title={'What can I do?'} content={contents[1]}/>
                                <AccordionContainer title={'Do I need to register?'} content={contents[2]}/>
                                <AccordionContainer title={'Do I need to login?'} content={contents[3]}/>
                                <AccordionContainer title={'Can I leave my review?'} content={contents[4]}/>
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