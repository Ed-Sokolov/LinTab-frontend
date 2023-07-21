import "./posts.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {SearchField} from "../../../Widgets/SearchField/SearchField";
import {PostCard} from "../../../Widgets/PostCard/PostCard";
import {MoveToTab} from "../../../Widgets/MoveToTab/MoveToTab";
import React from "react";
import {PostCardType} from "../../../Types/Post/PostType";
import {SortListContainer} from "../../../Widgets/SortList/SortListContainer";

type PostsTypes = {
    posts: Array<PostCardType>;
}

export const Posts: React.FC<PostsTypes> = ({posts}) => {
    return (
        <div className="posts_page">
            <Container>
                <div className="posts_page_content">
                    <div data-aos="fade-down"><H2>Posts</H2></div>
                    <div className="filter_field">
                        <SearchField/>
                        <SortListContainer/>
                    </div>
                    <div className="posts_list">
                        {posts.map(post => <PostCard key={post.id} {...post}/>)}
                    </div>
                </div>
            </Container>
            <MoveToTab theme={"yellow"}/>
        </div>
    )
}