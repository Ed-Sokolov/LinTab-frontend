import "./postCard.scss"
import {H6} from "../Headings/H6/H6";
import {UseSvg} from "../UseSvg/UseSvg";
import {NavLink} from "react-router-dom";
import React from "react";
import {PostCardType} from "../../Types/Post/PostType";

export const PostCard: React.FC<PostCardType> = (
    {
        id, title, preview, author_id,
        created_at, updated_at
    }
) => {
    let img = require('../../Assets/Images/PostCard/Test_post_card_image.jpg')

    return (
        <article className="post_card" data-aos="fade-up">
            <div className="promo_img">
                <img src={preview ? preview.prev_url : img}/>
            </div>
            <div className="content">
                <div className="empty_field"></div>
                <div className="main_content_wrapper">
                    <div className="main_content" data-aos="fade-right">
                        <ul className="information">
                            <li className="created_at">06.29.2023</li>
                            <li className="views">
                                <UseSvg spriteName="views" className="views_icon"></UseSvg>
                                <p className="count">100</p>
                            </li>
                        </ul>
                        <H6>{title}</H6>
                        <p className="author">by <NavLink to="#" className="custom_link">author</NavLink></p>
                        <NavLink to={`/posts/${id}`} className="move_to_post custom_link">
                            Read
                            <UseSvg spriteName={"full_arrow_right"} className={"move_to_post_icon"}></UseSvg>
                        </NavLink>
                    </div>
                </div>
                <ul className="interactions" data-aos="fade-left">
                    <li className="interaction">
                        <UseSvg spriteName="like" className="interaction_icon"></UseSvg>
                        <p className="count">100</p>
                    </li>
                    <li className="interaction">
                        <UseSvg spriteName="comment" className="interaction_icon"></UseSvg>
                        <p className="count">100</p>
                    </li>
                </ul>
            </div>
        </article>
    )
}