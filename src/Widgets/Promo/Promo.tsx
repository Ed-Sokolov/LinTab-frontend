import {useEffect} from "react";
import {layers} from "../../Assets/Images/Promo";
import "./promo.scss";
import {parallaxEffect} from "./parallaxEffect";

export const Promo = () => {

    useEffect(() => {
        const parallaxElements = document.querySelectorAll('.promo')

        function update(e?: MouseEvent) {
            const lastLayer = document.querySelector('.layer9')

            parallaxElements.forEach(element => {
                parallaxEffect(element, e)
            })

            if (lastLayer) (
                parallaxEffect(lastLayer, e)
            )
        }

        update()

        window.addEventListener("mousemove", (e) => {
            update(e);
        })
    }, [])

    return (
        <div className="parallax">
            <section className="promo_section">
                <div data-aos="fade-up" data-aos-delay={100} className="promo layer0"
                     data-speedx="0.01" data-speedy="0.02" data-speedz="0.01" data-rotation="0.01">
                    <img src={layers.layer0}/>
                </div>
                <div data-aos="fade-up" data-aos-delay={200} className="promo layer1"
                     data-speedx="0.014" data-speedy="0.018" data-speedz="0.014" data-rotation="0.012">
                    <img src={layers.layer1}/>
                </div>
                <div data-aos="fade-up" data-aos-delay={300} className="promo layer2"
                     data-speedx="0.016" data-speedy="0.022" data-speedz="0.012" data-rotation="0.014">
                    <img src={layers.layer2}/>
                </div>
                <div data-aos="fade-up" data-aos-delay={400} className="promo layer3"
                     data-speedx="0.018" data-speedy="0.016" data-speedz="0.015" data-rotation="0.013">
                    <img src={layers.layer3}/>
                </div>
                <div data-aos="fade-up" data-aos-delay={500} className="promo"
                     data-speedx="0.02" data-speedy="0.024" data-speedz="0.016" data-rotation="0.014">
                    <p className="subtitle">welcome to</p>
                </div>
                <div data-aos="fade-up" data-aos-delay={600} className="promo layer4"
                     data-speedx="0.022" data-speedy="0.026" data-speedz="0.017" data-rotation="0.016">
                    <img src={layers.layer4}/>
                </div>
                <div data-aos="fade-up" data-aos-delay={700} className="promo layer5"
                     data-speedx="0.024" data-speedy="0.028" data-speedz="0.019" data-rotation="0.018">
                    <img src={layers.layer5}/>
                </div>
                <div data-aos="fade-up" data-aos-delay={800} className="promo"
                     data-speedx="0.026" data-speedy="0.03" data-speedz="0.021" data-rotation="0.02">
                    <h1 className="title">LinTab</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay={1000} className="promo layer6"
                     data-speedx="0.028" data-speedy="0.031" data-speedz="0.022" data-rotation="0.021">
                    <img src={layers.layer6}/>
                </div>
                <div data-aos="fade-up" data-aos-delay={1200} className="promo layer7"
                     data-speedx="0.029" data-speedy="0.032" data-speedz="0.023" data-rotation="0.022">
                    <img src={layers.layer7}/>
                </div>
                <div data-aos="fade-up" data-aos-delay={1400} className="promo layer8"
                     data-speedx="0.03" data-speedy="0.034" data-speedz="0.024" data-rotation="0.023">
                    <img src={layers.layer8}/>
                </div>
            </section>
            <div data-aos="fade-up" data-aos-delay={1600} className="promo layer9"
                 data-speedx="0.031" data-speedy="0.035" data-speedz="0.025" data-rotation="0.025">
                <img src={layers.layer9} className="transition"/>
            </div>
        </div>
    )
}