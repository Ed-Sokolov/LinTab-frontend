import "./faq.scss";
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";
import {PointerDown} from "../../../Widgets/PointerDown/PointerDown";
import {H3} from "../../../Widgets/Headings/H3/H3";

export const FAQ = () => {
    return (
        <div className={"faq_page"}>
            <div className="faq_wrapper">
                <div className="faq_content">
                    <Container>
                        <div className="faq_content_inner">
                            <H2>FAQ</H2>
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