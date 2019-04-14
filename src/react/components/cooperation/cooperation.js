import React from 'react';
import {Image, Container, Row, Col, Button} from "react-bootstrap";
import TitleBlock from "../commons/title-block";

import './cooperation.css';

const Cooperation = (props) => {

    const titleData = {
        title: "Присоеденяйтесь",
        text: "Мы всегда рады принять в нашу команду новых специалистов. Если у вас есть желание присоединиться к нашей команде обязательно свяжитесь с нами. Возможны разные варианты сотрудничества.",
    };

    const src = require("./images/infographic.svg");

    return (
        <div id={"cooperation"} className={"white-section"}>
            <div className={"section"}>
                <Container>
                    <Row className={"justify-content-center pb-4"}>
                        <Col sm={6} xs>
                            <TitleBlock title={titleData.title} text={titleData.text} />
                        </Col>
                    </Row>
                    <Row className={"justify-content-center pb-4"}>
                        <Col sm={6} xs>
                            <Image fluid src={src} width={"100%"} height={"auto"}/>
                        </Col>
                    </Row>
                    <Row className={"justify-content-center pb-4 pt-4 text-center"}>
                        <Col>
                            <Button
                                className={"btn send-button"}
                                onClick={ props.handleShow }
                            >
                                присоединиться
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Cooperation;