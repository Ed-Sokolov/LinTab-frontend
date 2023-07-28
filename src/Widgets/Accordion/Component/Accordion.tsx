import {H4} from "../../Headings/H4/H4";
import {UseSvg} from "../../UseSvg/UseSvg";
import "./accordion.scss";
import React, {useEffect, useRef, useState} from "react";

type AccordionTypes = {
    title: string;
    content: string;
    isClosed: boolean;
    setIsClosed: React.Dispatch<React.SetStateAction<boolean>>
}

export const Accordion: React.FC<AccordionTypes> = (
    {
        title, content, isClosed, setIsClosed
    }
) => {
    const contentHeight = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<number>(0);

    useEffect(() => {
        if (contentHeight.current) {
            setMaxHeight(contentHeight.current.scrollHeight > maxHeight ? contentHeight.current.scrollHeight : maxHeight);
            contentHeight.current.style.maxHeight = isClosed ? '0' : `${maxHeight + 100}px`;
        }
    }, [isClosed])

    return (
        <li className={`accordion ${isClosed ? 'closed' : ''}`}>
            <div className="accordion_title_wrapper" onClick={() => setIsClosed(!isClosed)}>
                <H4>{title}</H4>
                <UseSvg spriteName={"arrow_up"} className={"open_icon"}/>
            </div>
            <div className="accordion_content" ref={contentHeight} dangerouslySetInnerHTML={{__html: content}}>
            </div>
        </li>
    )
}