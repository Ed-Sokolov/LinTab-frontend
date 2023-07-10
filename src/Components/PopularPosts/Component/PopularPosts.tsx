import {Container} from "../../../Widgets/Container/Container";
import "./popularPosts.scss"
import {H2} from "../../../Widgets/Headings/H2/H2";
import {PostCard} from "../../../Widgets/PostCard/PostCard";
import {MoveToTab} from "../../../Widgets/MoveToTab/MoveToTab";
import {ExtraAction} from "../../../Widgets/ExtraAction/ExtraAction";
import {PostCardType} from "../../../Types/Post/PostType";
import React from "react";
import {LeftColumn} from "./Columns/LeftColumn";
import {RightColumn} from "./Columns/RigthColumn";

type PopularPostsTypes = {
    posts: Array<PostCardType>
}

export const PopularPosts: React.FC<PopularPostsTypes> = ({posts}) => {

    const leftColumn = posts.filter((value, index) => index % 2 === 0);
    const rightColumn = posts.filter((value, index) => index % 2 === 1);

    return (
        <section className="popular_posts_section">
            <Container>
                <div className="popular_posts_content">
                    <div data-aos="fade-right"><H2 color="gold">popular posts</H2></div>
                    <ul className="posts_columns">
                        <LeftColumn>
                            {
                                leftColumn.map(post => <li key={post.id} className="post_item">
                                    <PostCard {...post}/>
                                </li>)
                            }
                        </LeftColumn>
                        <RightColumn>
                            {
                                rightColumn.map(post => <li className="post_item" key={post.id}>
                                    <PostCard {...post}/>
                                </li>)
                            }
                        </RightColumn>
                    </ul>
                </div>
            </Container>
            <MoveToTab></MoveToTab>
            <ExtraAction></ExtraAction>
        </section>
    )
}