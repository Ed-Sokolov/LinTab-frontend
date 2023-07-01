import "./post.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H4} from "../../../Widgets/Headings/H4/H4";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";

export const Post = () => {
    const img = require('../../../Assets/Images/PostCard/Test_post_card_image.jpg');

    return (
        <div className="post">
            <div className="post_promo">
                <div className="promo_content_wrapper">
                    <Container>
                        <div className="promo_content">
                            <div className="date_field">
                                <p className="date">07.01.2023</p>
                            </div>
                            <H4>Title. Title. Title, title, title, title, title. Title</H4>
                            <ul className="interactions">
                                <li className="interaction_item">
                                    <UseSvg spriteName={"views"} className={"interaction_icon views"}/>
                                    <p className="count">100</p>
                                </li>
                                <li className="interaction_item">
                                    <UseSvg spriteName={"like"} className={"interaction_icon like"}/>
                                    <p className="count">100</p>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
                <div className="promo_img">
                    <img src={img}/>
                </div>
            </div>
        </div>
    )
}