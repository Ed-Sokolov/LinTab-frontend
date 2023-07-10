import "./moveToTab.scss"
import React from "react";
import {Container} from "../Container/Container";
import {MoveToTabContent} from "./Content/MoveToTabContent";

type MoveToAuthTabTypes = {
    title?: string;
    text?: string;
    theme?: 'brown' | 'yellow' | 'dark_brown';
    isCenter?: boolean;
    isCustomLink?: boolean;
    linkName?: string;
    link?: string;
}

export const MoveToTab: React.FC<MoveToAuthTabTypes> = (
    {
        title = "Do you like these posts?",
        text = "You can create such posts but you need to be authorized",
        theme = 'brown',
        isCenter = false,
        isCustomLink = false,
        linkName = '',
        link = ''
    }
) => {
    return (
        <div className={`move_to ${theme} ${isCenter && 'center'}`} data-aos="fade-up">
            {
                isCenter ?
                    <Container>
                        <MoveToTabContent title={title} text={text} isCustomLink={isCustomLink} linkName={linkName}
                                          link={link}/>
                    </Container>
                    : <MoveToTabContent title={title} text={text} isCustomLink={isCustomLink} linkName={linkName}
                                        link={link}/>
            }
        </div>
    )
}