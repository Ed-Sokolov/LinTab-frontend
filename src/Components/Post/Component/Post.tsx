import "./post.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H4} from "../../../Widgets/Headings/H4/H4";
import {UseSvg} from "../../../Widgets/UseSvg/UseSvg";
import {NavLink} from "react-router-dom";
import {MoveToAuthTab} from "../../../Widgets/MoveToAuthTab/MoveToAuthTab";
import {PostType} from "../../../Types/Post/PostType";
import React from "react";

export const Post: React.FC<PostType> = ({id, title, content, author_id, created_at}) => {
    const img = require('../../../Assets/Images/PostCard/Test_post_card_image.jpg');

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
                <>
                    <ul className="redirects">
                        <li className="author">
                            by <NavLink to={`/users/${author_id}`}>author</NavLink>
                        </li>
                        <li className="edit">
                            <NavLink to={'#'} className="edit_link">
                                <UseSvg spriteName={"edit"} className={"edit_icon"}/>
                                edit
                            </NavLink>
                        </li>
                    </ul>
                    <div className="post_content">
                        <div className="p_wrapper">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.</p>
                        </div>
                        <div className="img">
                            <img src={img}/>
                        </div>
                        <div className="p_wrapper">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Sit amet mauris commodo quis imperdiet massa tincidunt
                                nunc pulvinar. Consequat ac felis donec et. Scelerisque viverra mauris in aliquam sem.
                                Neque
                                volutpat ac tincidunt vitae semper. Amet cursus sit amet dictum. Tristique risus nec
                                feugiat in fermentum posuere urna. Posuere ac ut consequat semper viverra. In aliquam
                                sem
                                fringilla ut morbi tincidunt augue interdum. Turpis egestas integer eget aliquet nibh.
                                Ut
                                venenatis tellus in metus vulputate eu. Nec ullamcorper sit amet risus nullam eget. Eu
                                scelerisque
                                felis imperdiet proin fermentum leo. Aliquet enim tortor at auctor urna nunc id cursus.
                                Sed ullamcorper morbi tincidunt ornare massa. In ante metus dictum at.</p>
                        </div>
                        <div className="img">
                            <img src={img}/>
                            <img src={img}/>
                        </div>
                        <div className="p_wrapper">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit
                                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                laborum.</p>
                        </div>
                    </div>
                    <div className="just_like_it_wrapper">
                        <p className="agitation">Just like it</p>
                        <div className="pointer">
                            <UseSvg spriteName={"arrow_circle_down"} className={"pointer_icon"}/>
                        </div>
                        <div className="just_like_it">
                            <UseSvg spriteName={"like"} className={"like_it_icon"}/>
                            <p className="count">100</p>
                        </div>
                    </div>
                </>
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