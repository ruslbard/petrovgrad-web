import React from 'react';
import Image from 'react-bootstrap/Image';

import './service-item.css'

const ServiceItem = ({ service, addStyles }) => {

    let fileName = ((service === undefined) || (service === null)) ? "default" : service.code;
    const src = require("./service-icons/" + fileName + ".svg");

    return (
        <div className={"service-item text-center ".concat(addStyles)}>

            <Image src={src}/>
            <h2 className={"service-item-title"}>{service.name}</h2>
            <span className={"service-item-text"}>{service.text}</span>

        </div>
    );
};

export default ServiceItem;