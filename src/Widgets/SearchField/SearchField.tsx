import "./searchField.scss"
import {UseSvg} from "../UseSvg/UseSvg";

export const SearchField = () => {
    return (
        <div className="search_field">
            <input className="search_input" type="text" placeholder="search by title"/>
            <button className="search_btn">
                <UseSvg spriteName={"search"} className={"search_icon"}/>
            </button>
        </div>
    )
}