import {HeaderContainer} from "../../Widgets/Header/HeaderContainer";
import {Promo} from "../../Widgets/Promo/Promo";
import {PopularPostsContainer} from "../../Components/PopularPosts/PopularPostsContainer";
import {Footer} from "../../Widgets/Footer/Footer";

export const Main = () => {
    return (
        <div>
            <HeaderContainer></HeaderContainer>
            <Promo></Promo>
            <PopularPostsContainer></PopularPostsContainer>
            <Footer></Footer>
        </div>
    )
}