import React from 'react';

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import './offer-card.css';

class OfferCard extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            code: props.code,
            address: props.address,
            livingArea: props.living_area,
            totalArea: props.total_area,
            price: props.price,
            handleShow: props.handleShow,
        }
    };

    render () {

        const src = require('./offers-photos/' + this.state.code + '.jpg');

        return (
            <div className={"text-center offer-card"}>
                <div className={"offer-photo"}>
                    <Image fluid src={src} width={"100%"} height={"auto"}/>
                </div>
                <p className={"offer-address"}>{this.state.address}</p>
                <p className={"offer-area"}>S общая = {this.state.totalArea} м<sup>2</sup></p>
                <p className={"offer-area"}>S жилая = {this.state.livingArea} м<sup>2</sup></p>
                <div className={"p-3"}>
                    <Button
                        className={"btn price-button"}
                        onClick={this.state.handleShow}
                    >
                        {this.state.price} <i className={"fa fa-rub"}/>
                    </Button>
                </div>
            </div>
        );
    }
}

export default OfferCard;