import {layers} from "../../Assets/Images/Promo";
import "./promo.scss"

export const Promo = () => {
    return (
        <section className="promo_section">
            <div className="vignette"></div>
            <img src={layers.layer0} className="promo layer0"/>
            <img src={layers.layer1} className="promo layer1"/>98
            <img src={layers.layer2} className="promo layer2"/>
            <img src={layers.layer3} className="promo layer3"/>
            <p className="promo subtitle">welcome to</p>
            <img src={layers.layer4} className="promo layer4"/>
            <img src={layers.layer5} className="promo layer5"/>
            <h1 className="promo title">LinTab</h1>
            <img src={layers.layer6} className="promo layer6"/>
            <img src={layers.layer7} className="promo layer7"/>
            <img src={layers.layer8} className="promo layer8"/>
            <img src={layers.layer9} className="promo layer9"/>
        </section>
    )
}