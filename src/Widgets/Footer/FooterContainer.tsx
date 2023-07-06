import {Footer} from "./Component/Footer";
import {useIsShowComponent} from "../../Hooks/hooks";

export const FooterContainer = () => {
    let isShowComponent = useIsShowComponent();

    return isShowComponent ? <Footer/> : <></>
}