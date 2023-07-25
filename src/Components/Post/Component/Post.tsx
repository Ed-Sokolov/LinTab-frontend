import "./post.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H4} from "../../../Widgets/Headings/H4/H4";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";
import {NavLink} from "react-router-dom";
import {MoveToTab} from "../../../Widgets/MoveToTab/MoveToTab";
import {PostType} from "../../../Types/Post/PostType";
import React from "react";
import parse from "html-react-parser";
import {SetLike} from "../../../Widgets/SetLike/SetLike";
import {Created} from "../../../Widgets/Created/Created";

export const Post: React.FC<PostType> = ({id, title, content, author_id, image, created_at, updated_at, views}) => {
    const img = require('../../../Assets/Images/PostCard/Test_post_card_image.jpg');

    const parsedContent = parse(content) as Array<React.ReactElement> | string;
    return (
        <div className="post">
            <div className="post_promo">
                <div className="promo_content_wrapper">
                    <Container>
                        <div className="promo_content">
                            <div className="date_field">
                                <Created created_at={created_at} updated_at={updated_at} size={'l'}/>
                            </div>
                            <H4>{title}</H4>
                            <ul className="interactions">
                                <li className="interaction_item">
                                    <UseSvg spriteName={"views"} className={"interaction_icon views"}/>
                                    <p className="count">{views}</p>
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
                    <img src={image ? image.url : img}/>
                </div>
            </div>
            <Container>
                <ul className="redirects">
                    <li className="author">
                        by <NavLink to={`/users/${author_id}`} className={"custom_link"}>author</NavLink>
                    </li>
                    <li className="edit">
                        <NavLink to={`/posts/${id}/edit`} className="edit_link custom_link">
                            <UseSvg spriteName={"edit"} className={"edit_icon"}/>
                            edit
                        </NavLink>
                    </li>
                </ul>
                <div className="post_content">
                    {
                        typeof parsedContent === "string" ?
                            <div className="p_wrapper" data-aos="fade-up">{parsedContent}</div> :
                            parsedContent.map((content, index) => <div className="p_wrapper" key={index}
                                                                       data-aos="fade-up">
                                {content}</div>)}
                </div>
                <SetLike/>
            </Container>
            <MoveToTab
                title={"Do you want to create a post or leave a comment?"}
                text={"You can create such post or leave a comment but you need to be authorized"}
                theme={"dark_brown"}
            />
        </div>
    )
}