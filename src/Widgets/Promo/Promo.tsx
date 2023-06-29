import {useEffect} from "react";
import {layers} from "../../Assets/Images/Promo";
import "./promo.scss";
import {parallaxEffect} from "./parallaxEffect";

export const Promo = () => {

    useEffect(() => {
        const parallaxElements = document.querySelectorAll('.promo');

        const parallaxScroll = document.querySelectorAll('.parallax_scroll');

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

        window.addEventListener("scroll", e => {
            let value = window.scrollY

            parallaxScroll.forEach((element, index) => {
                let speedScroll = Number(element.getAttribute('data-speed-scroll'));

                (element.childNodes[0] as HTMLElement).style.top = `${value * speedScroll}px`;
            })
        })
    }, [])

    return (
        <div className="parallax">
            <section className="promo_section">
                <div data-aos="fade-up" data-aos-delay="100" className="promo layer0 parallax_scroll"
                     data-speedx="0.01" data-speedy="0.02" data-speedz="0.01" data-rotation="0.01"
                     data-speed-scroll="0.5">
                    <img src={layers.layer0}/>
                </div>
                <div data-aos="fade-up" data-aos-delay="200" className="promo layer1 parallax_scroll"
                     data-speedx="0.014" data-speedy="0.018" data-speedz="0.014" data-rotation="0.012"
                     data-speed-scroll="0.45">
                    <img src={layers.layer1}/>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className="promo layer2 parallax_scroll"
                     data-speedx="0.016" data-speedy="0.022" data-speedz="0.012" data-rotation="0.014"
                     data-speed-scroll="0.5">
                    <img src={layers.layer2}/>
                </div>
                <div data-aos="fade-up" data-aos-delay="400" className="promo layer3 parallax_scroll"
                     data-speedx="0.018" data-speedy="0.016" data-speedz="0.015" data-rotation="0.013"
                     data-speed-scroll="0.35">
                    <img src={layers.layer3}/>
                </div>
                <div data-aos="fade-up" data-aos-delay="500" className="promo promo_subtitle parallax_scroll"
                     data-speedx="0.02" data-speedy="0.024" data-speedz="0.016" data-rotation="0.014"
                     data-speed-scroll="0.4">
                    <p className="subtitle">welcome to</p>
                </div>
                <div data-aos="fade-up" data-aos-delay="600" className="promo layer4 parallax_scroll"
                     data-speedx="0.022" data-speedy="0.026" data-speedz="0.017" data-rotation="0.016"
                     data-speed-scroll="0.30">
                    <img src={layers.layer4}/>
                </div>
                <div data-aos="fade-up" data-aos-delay="700" className="promo layer5 parallax_scroll"
                     data-speedx="0.024" data-speedy="0.028" data-speedz="0.019" data-rotation="0.018"
                     data-speed-scroll="0.25">
                    <img src={layers.layer5}/>
                </div>
                <div data-aos="fade-up" data-aos-delay="800" className="promo parallax_scroll"
                     data-speedx="0.026" data-speedy="0.03" data-speedz="0.021" data-rotation="0.02"
                     data-speed-scroll="0.30">
                    <h1 className="title">LinTab</h1>
                </div>
                <div data-aos="fade-up" data-aos-delay="1000" className="promo layer6 parallax_scroll"
                     data-speedx="0.028" data-speedy="0.031" data-speedz="0.022" data-rotation="0.021"
                     data-speed-scroll="0.20">
                    <img src={layers.layer6}/>
                </div>
                <div data-aos="fade-up" data-aos-delay="1200" className="promo layer7 parallax_scroll"
                     data-speedx="0.029" data-speedy="0.032" data-speedz="0.023" data-rotation="0.022"
                     data-speed-scroll="0.15">
                    <img src={layers.layer7}/>
                </div>
                <div data-aos="fade-up" data-aos-delay="1400" className="promo layer8 parallax_scroll"
                     data-speedx="0.03" data-speedy="0.034" data-speedz="0.024" data-rotation="0.023"
                     data-speed-scroll="0.10">
                    <img src={layers.layer8}/>
                </div>
            </section>
            <div data-aos="fade-up" data-aos-delay="1600" className="promo layer9"
                 data-speedx="0.031" data-speedy="0.035" data-speedz="0.025" data-rotation="0.025">
                <img src={layers.layer9} className="transition"/>
            </div>
        </div>
    )
}