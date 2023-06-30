import {Container} from "../Container/Container";
import "./footer.scss"
import {H4} from "../Headings/H4/H4";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_content">
                <Container>
                    <div className="footer_content_body">
                        <div className="company_links">
                            <H4>Lintab</H4>
                            <ul className="social_list">
                                <li className="social_item">telegram</li>
                                <li className="social_item">instagram</li>
                                <li className="social_item">lintab@gmail.com</li>
                            </ul>
                        </div>
                        <div className="menu">
                            <p className="menu_title">Menu</p>
                            <nav className="nav">
                                <ul className="menu_list">
                                    <li className="menu_item">Main</li>
                                    <li className="menu_item">Posts</li>
                                    <li className="menu_item">Projects</li>
                                    <li className="menu_item">Help</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Container>
                <div className="move_to_contact">
                    Soon...
                </div>
            </div>
            <p className="copyright">
                Copyright © 2023 Sokolov Eduard
            </p>
        </footer>
    )
}