import "./moveToAuthTab.scss"
import React from "react";
import {Container} from "../Container/Container";
import {MoveToAuthTabContent} from "./Content/MoveToAuthTabContent";

type MoveToAuthTabTypes = {
    title?: string;
    text?: string;
    theme?: 'brown' | 'yellow' | 'dark_brown';
    isCenter?: boolean
}

export const MoveToAuthTab: React.FC<MoveToAuthTabTypes> = (
    {
        title = "Do you like these posts?",
        text = "You can create such posts but you need to be authorized",
        theme = 'brown',
        isCenter = false
    }
) => {
    return (
        <div className={`move_to_auth ${theme} ${isCenter && 'center'}`} data-aos="fade-up">
            {
                isCenter ?
                    <Container>
                        <MoveToAuthTabContent title={title} text={text}/>
                    </Container>
                    : <MoveToAuthTabContent title={title} text={text}/>
            }
        </div>
    )
}