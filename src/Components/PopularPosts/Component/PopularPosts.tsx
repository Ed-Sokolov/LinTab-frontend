import {Container} from "../../../Widgets/Container/Container";
import "./popularPosts.scss"
import {H2} from "../../../Widgets/H2/H2";

export const PopularPosts = () => {
    return (
        <section className="popular_posts_section">
            <Container>
                <div className="popular_posts_content">
                    <H2 color="gold">popular posts</H2>
                </div>
            </Container>
        </section>
    )
}