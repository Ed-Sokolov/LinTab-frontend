import {layers} from "../../Assets/Images/Promo";
import "./promo.scss";

export const Promo = () => {
    return (
        <section className="promo_section">
            <div data-aos="fade-up" data-aos-delay={100} className="promo layer0">
                <img src={layers.layer0} />
            </div>
            <div data-aos="fade-up" data-aos-delay={200} className="promo layer1">
                <img src={layers.layer1} />
            </div>
            <div data-aos="fade-up" data-aos-delay={300} className="promo layer2">
                <img src={layers.layer2} />
            </div>
            <div data-aos="fade-up" data-aos-delay={400} className="promo layer3">
                <img src={layers.layer3}/>
            </div>
            <div data-aos="fade-up" data-aos-delay={500} className="promo">
                <p className="subtitle">welcome to</p>
            </div>
            <div data-aos="fade-up" data-aos-delay={600} className="promo layer4">
                <img src={layers.layer4} />
            </div>
            <div data-aos="fade-up" data-aos-delay={700} className="promo layer5">
                <img src={layers.layer5} />
            </div>
            <div data-aos="fade-up" data-aos-delay={800} className="promo">
                <h1 className="title">LinTab</h1>
            </div>
            <div data-aos="fade-up" data-aos-delay={1000} className="promo layer6">
                <img src={layers.layer6} />
            </div>
            <div data-aos="fade-up" data-aos-delay={1200} className="promo layer7">
                <img src={layers.layer7} />
            </div>
            <div data-aos="fade-up" data-aos-delay={1400} className="promo layer8">
                <img src={layers.layer8} />
            </div>
            <div data-aos="fade-up" data-aos-delay={1600} className="promo layer9">
                <img src={layers.layer9} />
            </div>
        </section>
    )
}