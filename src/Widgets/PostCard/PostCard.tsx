import "./postCard.scss"
import {H6} from "../Headings/H6/H6";

export const PostCard = () => {
    let img = require('../../Assets/Images/PostCard/Test_post_card_image.jpg')

    return (
        <article className="post_card">
            <div className="promo_img">
                <img src={img}/>
            </div>
            <div className="content">
                <div className="main_content">
                    <ul className="information">
                        <li className="created_at">06.29.2023</li>
                        <li className="views">100</li>
                    </ul>
                    <H6>Title. Title. Title, title, title, title, title. Title</H6>
                    <p className="author">by <a href="#" className="move_to_author">author</a></p>
                    <a href="#" className="move_to_post">Read</a>
                </div>
                <div className="empty_field"></div>
                <ul className="interactions">
                    <li className="interaction">100</li>
                    <li className="interaction">100</li>
                </ul>
            </div>
        </article>
    )
}