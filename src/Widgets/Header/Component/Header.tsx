import {NavLink} from "react-router-dom";
import './header.scss';
import {Container} from "../../Container/Container";
import {AuthField} from "../../AuthField/AuthField";

export const Header = () => {
    const warningIcon: string = require('../../../Assets/Icons/warning.svg').default

    return (
        <header className="header" data-aos="fade-down" data-aos-delay={1800}>
            <Container>
                <div className="header_component">
                    <nav className="nav">
                        <ul className="list">
                            <li className="list_item">
                                <NavLink to={'#'}>main</NavLink>
                            </li>
                            <li className="list_item">
                                <NavLink to={'#'}>posts</NavLink>
                            </li>
                            <li className="list_item">
                                <NavLink to={'#'}>projects</NavLink>
                            </li>
                            <li className="list_item">
                                <NavLink to={'#'}>help</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="warning">
                        <img src={warningIcon} alt=""/>
                    </div>
                    <AuthField></AuthField>
                </div>
            </Container>
        </header>
    )
}