import {Container} from "../../../Widgets/Container/Container";
import "./popularPosts.scss"
import {H2} from "../../../Widgets/Headings/H2/H2";
import {PostCard} from "../../../Widgets/PostCard/PostCard";
import {MoveToTab} from "../../../Widgets/MoveToTab/MoveToTab";
import {ExtraAction} from "../../../Widgets/ExtraAction/ExtraAction";
import {PostCardType} from "../../../Types/Post/PostType";
import React from "react";

type PopularPostsTypes = {
    posts: Array<PostCardType>;
    isAuth: boolean;
}

export const PopularPosts: React.FC<PopularPostsTypes> = ({posts, isAuth}) => {
    return (
        <section className="popular_posts_section">
            <Container>
                <div className="popular_posts_content">
                    <div data-aos="fade-right"><H2 color="gold">popular posts</H2></div>
                    <ul className="popular_posts_list">
                        {
                            posts.map((post, index) => (
                                <li className="popular_post_card" data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-left" : "fade-up"} key={index}>
                                    <PostCard {...post}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
            {
                isAuth ?
                    <MoveToTab text={"You can create such posts. Just move by the link"} isCustomLink
                               linkName={"Create post"} link={"/posts/create"}/> :
                    <MoveToTab/>
            }
            <ExtraAction></ExtraAction>
        </section>
    )
}