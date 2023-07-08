import "./posts.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {SearchField} from "../../../Widgets/SearchField/SearchField";
import {SortList} from "../../../Widgets/SortList/SortList";
import {PostCard} from "../../../Widgets/PostCard/PostCard";
import {MoveToAuthTab} from "../../../Widgets/MoveToAuthTab/MoveToAuthTab";
import React from "react";
import {PostType} from "../../../Types/Post/PostType";

type PostsTypes = {
    posts: Array<PostType>;
}

export const Posts: React.FC<PostsTypes> = ({posts}) => {
    return (
        <div className="posts_page">
            <Container>
                <div className="posts_page_content">
                    <div data-aos="fade-down"><H2>Posts</H2></div>
                    <div className="filter_field">
                        <SearchField/>
                        <SortList/>
                    </div>
                    <div className="posts_list">
                        {posts.map(post => <PostCard key={post.id} id={post.id} title={post.title}/>)}
                    </div>
                </div>
            </Container>
            <MoveToAuthTab isCenter={true} theme={"yellow"}/>
        </div>
    )
}