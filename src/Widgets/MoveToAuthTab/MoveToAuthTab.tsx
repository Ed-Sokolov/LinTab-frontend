import "./moveToAuthTab.scss"
import React from "react";
import {Container} from "../Container/Container";
import {MoveToAuthTabContent} from "./Content/MoveToAuthTabContent";

type MoveToAuthTabProps = {
    theme?: 'brown' | 'yellow' | 'dark_brown';
    isCenter?: boolean
}

export const MoveToAuthTab: React.FC<MoveToAuthTabProps> = (
    {theme = 'brown', isCenter}
) => {
    return (
        <div className={`move_to_auth ${theme} ${isCenter && 'center'}`} data-aos="fade-up">
            {
                isCenter ?
                    <Container>
                        <MoveToAuthTabContent/>
                    </Container>
                    : <MoveToAuthTabContent/>
            }
        </div>
    )
}