import "./moveToTab.scss"
import React from "react";
import {Container} from "../Container/Container";
import {MoveToTabContent} from "./Content/MoveToTabContent";

type MoveToAuthTabTypes = {
    title?: string;
    text?: string;
    theme?: 'brown' | 'yellow' | 'dark_brown';
    isCustomLink?: boolean;
    linkName?: string;
    link?: string;
}

export const MoveToTab: React.FC<MoveToAuthTabTypes> = (
    {
        title = "Do you like these posts?",
        text = "You can create such posts but you need to be authorized",
        theme = 'brown',
        isCustomLink = false,
        linkName = '',
        link = ''
    }
) => {
    return (
        <div className={`move_to ${theme}`} data-aos="fade-up">
            {
                <Container>
                    <MoveToTabContent title={title} text={text} isCustomLink={isCustomLink} linkName={linkName}
                                      link={link}/>
                </Container>
            }
        </div>
    )
}