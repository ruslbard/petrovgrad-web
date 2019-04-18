import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleBlock from "../commons/title-block";
import OfferCard from "./offer-card";

import './best-offers.css';

class BestOffers extends React.Component {

    constructor (props, context) {
        super(props);
        this.state = {
            handleShow: props.handleShow,
            offers: props.offers,
        }
    };


    render () {

        const titleData = {
            title: "Лучшие предложения",
            text: "Мы отобрали для вас самые лучшие предложения на рынке недвижимости нашего города. Вы можете узнать о них подробнее, связавшись с нами."
        };

        const cards = this.state.offers.map(({code, address, living_area, total_area, price}) => {

            return(
                <Col sm={4} xs={12} className={"offer-cards"}>
                    <OfferCard code={ code } address={ address } living_area={ living_area } total_area={ total_area } price={ price } handleShow={this.state.handleShow}/>
                </Col>
            );
        });


        return (

            <div id={"offers"} className={"blue-section opacity"}>
                <div className={"section"}>
                    <Container>
                        <Row className={"justify-content-center pb-4"}>
                            <Col sm={6} xs>
                                <TitleBlock title={titleData.title} text={titleData.text}/>
                            </Col>
                        </Row>
                        <Row className={"justify-content-center"}>
                            {cards}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default BestOffers;