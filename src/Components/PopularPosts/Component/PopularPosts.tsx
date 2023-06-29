import {Container} from "../../../Widgets/Container/Container";
import "./popularPosts.scss"
import {H2} from "../../../Widgets/Headings/H2/H2";
import {PostCard} from "../../../Widgets/PostCard/PostCard";
import {MoveToAuthTab} from "../../../Widgets/MoveToAuthTab/MoveToAuthTab";
import {Button} from "../../../Widgets/Button/Button";

export const PopularPosts = () => {
    return (
        <section className="popular_posts_section">
            <Container>
                <div className="popular_posts_content">
                    <H2 color="gold">popular posts</H2>
                    <ul className="posts_columns">
                        <li className="left_column">
                            <ul className="posts_list">
                                <li className="post_item">
                                    <PostCard></PostCard>
                                </li>
                                <li className="post_item">
                                    <PostCard></PostCard>
                                </li>
                            </ul>
                        </li>
                        <li className="right_column">
                            <ul className="posts_list">
                                <li className="post_item">
                                    <PostCard></PostCard>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Container>
            <MoveToAuthTab></MoveToAuthTab>
        </section>
    )
}