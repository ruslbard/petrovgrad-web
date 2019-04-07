import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TitleBlock from "../commons/title-block";
import ServiceItem from "./service-item";
import Line from "../commons/line";

import './services.css';

const Services = ({ services }) => {

    const titleData = {
        title: "То что вам нужно",
        text: "Занимаемся только тем, в чем сильно разбираемся. Представляем вам услуги, которые мы оказываем."
    };

    return (
        <div id={"services"} className={"white-section"}>
            <div className={"section"}>
                <Container>
                    <Row className={"justify-content-center"}>
                        <Col sm={6} xs>
                            <TitleBlock title={ titleData.title } text={ titleData.text }/>
                        </Col>
                    </Row>
                    <Row className={"justify-content-center services-line"}>
                        <Col sm={4} xs={12}>
                            <ServiceItem service={ services.subsidies }/>
                        </Col>
                        <Col sm={4} xs={12}>
                            <ServiceItem service={ services.all_realty }/>
                        </Col>
                        <Col sm={4} xs={12}>
                            <ServiceItem service={ services.estimation }/>
                        </Col>
                    </Row>
                    <Row className={"services-splitter"}>
                        <Col sm={4}>
                            <Line className={"services"} align={"center"}/>
                        </Col>
                        <Col sm={4}>
                            <Line className={"services"} align={"center"}/>
                        </Col>
                        <Col sm={4}>
                            <Line className={"services"} align={"center"}/>
                        </Col>
                    </Row>
                    <Row className={"justify-content-center"}>
                        <Col sm={4} xs={12}>
                            <ServiceItem service={ services.mortgage }/>
                        </Col>
                        <Col sm={4} xs={12}>
                            <ServiceItem service={ services.privatization }/>
                        </Col>
                        <Col sm={4} xs={12}>
                            <ServiceItem service={ services.resale_realty }/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;