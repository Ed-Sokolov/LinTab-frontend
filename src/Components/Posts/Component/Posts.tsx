import "./posts.scss"
import {Container} from "../../../Widgets/Container/Container";
import {H2} from "../../../Widgets/Headings/H2/H2";
import {SearchField} from "../../../Widgets/SearchField/SearchField";
import {SortList} from "../../../Widgets/SortList/SortList";

export const Posts = () => {
    return (
        <div className="posts_page">
            <Container>
                <div className="posts_page_content">
                    <H2>Posts</H2>
                    <div className="filter_field">
                        <SearchField/>
                        <SortList/>
                    </div>
                </div>
            </Container>
        </div>
    )
}