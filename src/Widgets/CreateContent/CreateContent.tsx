import {UseSvg} from "../UseSvg/UseSvg";
import "./createContent.scss"
import {NavLink} from "react-router-dom";
import {useEffect, useRef} from "react";
import {useMediaQuery} from "react-responsive";

export const CreateContent = () => {
    const createRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const isMobile = useMediaQuery({ maxWidth: 428 });

    useEffect(() => {
        if (isMobile) {
            const handleClickOutside = (e: MouseEvent) => {
                if (
                    createRef.current &&
                    contentRef.current &&
                    !createRef.current.contains(e.target as Node) &&
                    !contentRef.current.contains(e.target as Node)
                ) {
                    createRef.current?.classList.remove('active');
                }
            };

            document.addEventListener("click", handleClickOutside);

            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
        }
    }, [isMobile]);

    const changeView = () => {
        if (isMobile) {
            createRef.current?.classList.toggle('active')
        }
    }

    return (
        <div className="create_field" ref={createRef}>
            <div className="create_link_wrapper">
                <NavLink to={"#"} className={"create_link"}>Post</NavLink>
            </div>
            <div className="add_circle_wrapper" onClick={changeView}>
                <UseSvg spriteName={"add_circle"} className={"create_content_icon"}/>
            </div>
            <div className="create_link_wrapper">
                <NavLink to={"#"} className={"create_link"}>Project</NavLink>
            </div>
            <div className="create_content" ref={contentRef}>
                <ul className="content_items">
                    <li className="content_item">
                        <NavLink to={"#"} className="content_link">Post</NavLink>
                    </li>
                    <li className="content_item">
                        <NavLink to={"#"} className="content_link">Project</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}