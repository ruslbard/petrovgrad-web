import React from 'react';

import './line.css';

const Line = ({className, width, height, align, color}) => {

    if ((width === undefined) || (width === null)) {
        width = "88px";
    }

    if ((height === undefined) || (height === null)) {
        height = "3px";
    }

    let lineColor = color;
    if (color === undefined || color === null) {
        lineColor = "#00C2FF";
    }

    const lineStyle = {
        width: width,
        height: height,
        backgroundColor: lineColor
    };

    let lineClass = "d-flex";

    if (align === 'center') {
        lineClass += " justify-content-center";
    } else if (align === 'left') {
        lineClass += " justify-content-start";
    } else if (align === 'right') {
        lineClass += " justify-content-end";
    }

    return (
        <div className={ lineClass }>
            <div className={"line ".concat(className)} style={ lineStyle }></div>
        </div>
    );
};

export default Line;