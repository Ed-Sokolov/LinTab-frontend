import "./post.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H4} from "../../../Widgets/Headings/H4/H4";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";
import {NavLink} from "react-router-dom";
import {MoveToAuthTab} from "../../../Widgets/MoveToAuthTab/MoveToAuthTab";
import {PostType} from "../../../Types/Post/PostType";
import React from "react";
import parse from "html-react-parser";
import {SetLike} from "../../../Widgets/SetLike/SetLike";

export const Post: React.FC<PostType> = ({id, title, content, author_id, created_at}) => {
    const img = require('../../../Assets/Images/PostCard/Test_post_card_image.jpg');

    const parsedContent = parse(content) as Array<React.ReactElement> | string;
    return (
        <div className="post">
            <div className="post_promo">
                <div className="promo_content_wrapper">
                    <Container>
                        <div className="promo_content">
                            <div className="date_field">
                                <p className="date">{created_at.toString()}</p>
                            </div>
                            <H4>{title}</H4>
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
            <Container>
                <ul className="redirects">
                    <li className="author">
                        by <NavLink to={`/users/${author_id}`}>author</NavLink>
                    </li>
                    <li className="edit">
                        <NavLink to={`/posts/${id}/edit`} className="edit_link">
                            <UseSvg spriteName={"edit"} className={"edit_icon"}/>
                            edit
                        </NavLink>
                    </li>
                </ul>
                <div className="post_content">
                    {
                        typeof parsedContent === "string" ? <div className="p_wrapper">{parsedContent}</div> :
                            parsedContent.map((content, index) => <div className="p_wrapper" key={index}>
                                {content}</div>)}
                </div>
                <SetLike/>
            </Container>
            <MoveToAuthTab
                title={"Do you want to create a post or leave a comment?"}
                text={"You can create such post or leave a comment but you need to be authorized"}
                theme={"dark_brown"}
                isCenter={true}
            />
        </div>
    )
}