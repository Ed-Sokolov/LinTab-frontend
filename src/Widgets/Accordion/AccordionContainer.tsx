import {Accordion} from "./Component/Accordion";
import React, {useState} from "react";

type AccordionContainerTypes = {
    title: string;
    content: string;
}

export const AccordionContainer: React.FC<AccordionContainerTypes> = ({title, content}) => {
    const [isClosed, setIsClosed] = useState<boolean>(true);

    return <Accordion title={title} content={content} isClosed={isClosed} setIsClosed={setIsClosed}/>
}