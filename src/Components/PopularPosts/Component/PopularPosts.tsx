import {Container} from "../../../Widgets/Container/Container";
import "./popularPosts.scss"
import {H2} from "../../../Widgets/Headings/H2/H2";
import {PostCard} from "../../../Widgets/PostCard/PostCard";
import {MoveToAuthTab} from "../../../Widgets/MoveToAuthTab/MoveToAuthTab";
import {ExtraAction} from "../../../Widgets/ExtraAction/ExtraAction";
import {PostType} from "../../../Types/Post/PostType";
import React from "react";
import {LeftColumn} from "./Columns/LeftColumn";
import {RightColumn} from "./Columns/RigthColumn";

type PopularPostsTypes = {
    posts: Array<PostType>
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
                                    <PostCard id={post.id} title={post.title}/>
                                </li>)
                            }
                        </LeftColumn>
                        <RightColumn>
                            {
                                rightColumn.map(post => <li className="post_item" key={post.id}>
                                    <PostCard id={post.id} title={post.title}/>
                                </li>)
                            }
                        </RightColumn>
                    </ul>
                </div>
            </Container>
            <MoveToAuthTab></MoveToAuthTab>
            <ExtraAction></ExtraAction>
        </section>
    )
}