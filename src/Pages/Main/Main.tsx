import {HeaderContainer} from "../../Widgets/Header/HeaderContainer";
import {Promo} from "../../Widgets/Promo/Promo";
import {useEffect} from "react";
import Aos from "aos";
import {PopularPostsContainer} from "../../Components/PopularPosts/PopularPostsContainer";
import {Footer} from "../../Widgets/Footer/Footer";

export const Main = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div>
            <HeaderContainer></HeaderContainer>
            <Promo></Promo>
            <PopularPostsContainer></PopularPostsContainer>
            <Footer></Footer>
        </div>
    )
}