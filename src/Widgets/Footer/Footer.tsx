import {Container} from "../Container/Container";
import "./footer.scss"
import {H4} from "../Headings/H4/H4";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer_content">
                    <div className="company_links">
                        <H4>Lintab</H4>
                    </div>
                </div>
            </Container>
        </footer>
    )
}