import React from 'react';

import './about.css';
import TitleBlock from "../commons/title-block";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {

    const titleData = {
        title: "О нас",
        text: "Наша специализация – вторичная недвижимость. Мы посчитали, что лучше не пытаться захватить весь мир, " +
            "а сосредоточиться только на том, в чем мы считаем себя одними из лучших."
    };
    return (
        <div id={"about"} className={"blue-section"}>
            <div className={"section"}>
                <Container>
                    <Row className={"justify-content-center pb-4"}>
                        <Col sm={6} xs>
                            <TitleBlock title={ titleData.title } text={ titleData.text } color={"white"}/>
                        </Col>
                    </Row>
                    <Row className={"justify-content-center"}>
                        <Col sm={4} xs={12} className={"facts"}>
                            <div className={"fact-title text-center"}>
                                <span>9 лет</span>
                            </div>
                            <div className={"fact-text text-center"}>
                                <span>на рынке вторичной недвижимости</span>
                            </div>
                        </Col>
                        <Col sm={4} xs={12} className={"facts"}>
                            <div className={"fact-title text-center"}>
                                <span>2000</span>
                            </div>
                            <div className={"fact-text text-center"}>
                                <span>качественных и успешных сделок</span>
                            </div>
                        </Col>
                        <Col sm={4} xs={12} className={"facts"}>
                            <div className={"fact-title text-center"}>
                                <span>>300</span>
                            </div>
                            <div className={"fact-text text-center"}>
                                <span>счастливых семей нашего города</span>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;