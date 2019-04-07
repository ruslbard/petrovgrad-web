import React from 'react';

import Line from "./line";

import './title-block.css';

const TitleBlock = ({title, text, color}) => {

    return (
        <div className={"text-center"}>
            <h2 className={"title"}>{title}</h2>
            {(color !== 'none') &&
                <Line width={88} height={3} align={"center"} color={color}/>
            }
            <div className={"text"}>
                <span>{text}</span>
            </div>
        </div>
    );
};
export default TitleBlock;