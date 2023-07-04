import {Routing} from "../Router/Router";
import {HeaderContainer} from "../Widgets/Header/HeaderContainer";
import {FooterContainer} from "../Widgets/Footer/FooterContainer";
import 'aos/dist/aos.css';

export const App = () => {
    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <div className="main_content">
                <Routing/>
            </div>
            <FooterContainer/>
        </div>)
}