import {Container} from "../../../Widgets/Container/Container";
import "./popularPosts.scss"
import {H2} from "../../../Widgets/Headings/H2/H2";
import {PostCard} from "../../../Widgets/PostCard/PostCard";
import {MoveToTab} from "../../../Widgets/MoveToTab/MoveToTab";
import {ExtraAction} from "../../../Widgets/ExtraAction/ExtraAction";
import {PostCardType} from "../../../Types/Post/PostType";
import React from "react";
import {useMediaQuery} from "react-responsive";

type PopularPostsTypes = {
    posts: Array<PostCardType>;
    isAuth: boolean;
}

export const PopularPosts: React.FC<PopularPostsTypes> = ({posts, isAuth}) => {
    const isOneColumn = useMediaQuery({maxWidth: 1084});

    const getAnimationDirection = (index: number): "fade-right" | "fade-left" | "fade-up" => {
        if (isOneColumn) return "fade-up";

        if (index % 2 === 0) return "fade-right";
        else return "fade-left";
    }

    return (
        <section className="popular_posts_section">
            <Container>
                <div className="popular_posts_content">
                    <div data-aos="fade-right"><H2 color="gold">popular posts</H2></div>
                    <ul className="popular_posts_list">
                        {
                            posts.map((post, index) => (
                                <li className="popular_post_card"
                                    data-aos={getAnimationDirection(index)}
                                    key={index}>
                                    <PostCard {...post}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Container>
            <ExtraAction/>
            {
                isAuth ?
                    <MoveToTab text={"You can create such posts. Just move by the link"} isCustomLink
                               linkName={"Create post"} link={"/posts/create"}/> :
                    <MoveToTab/>
            }
        </section>
    )
}