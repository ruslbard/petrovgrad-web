import React from 'react';
import {Container, Row, Col, Media, Image} from 'react-bootstrap';

import TitleBlock from '../commons/title-block';
import Line from "../commons/line";

import './feedbacks.css';


const FeedBacks = ({ feedbackData }) => {

    const titleData = {
        title: "Отзывы клиентов",
        text: "Ваши положительные эмоции по окончанию сделки — самые важные критерии для нас!"
    };

    const feedbacks = feedbackData.map(({ code, name, date, link, text }) => {

        return (
            <Row className={"pb-3 justify-content-center"}>
                <Col sm={8}>
                    <Media>
                        <a href={link}>
                            {/*<img*/}
                                {/*width={75}*/}
                                {/*height={75}*/}
                                {/*className="mr-3 roundedCircle"*/}
                                {/*src={require('./photos/' + code + '.svg')}*/}
                                {/*alt="Generic placeholder"*/}
                            {/*/>*/}
                            <Image
                                className="mr-3"
                                width={75}
                                height={75}
                                src={require('./photos/' + code + '.svg')}
                                roundedCircle
                            />
                        </a>
                        <Media.Body>
                            <h5>{name}</h5>
                            <p className={"feedback-date"}>{date}</p>
                            <p className={"feedback-text"}>{text}</p>
                            <Row>
                                <Col>
                                    <Line width={88} height={3} align={"left"}/>
                                </Col>
                                <Col>
                                    <div className={"float-right"}>
                                        <Image src={require('./images/quotes.svg')}/>
                                    </div>
                                </Col>
                            </Row>

                        </Media.Body>
                    </Media>
                </Col>
            </Row>
        );

    });

    return(
        <div className={"white-section"}>
            <div className={"section"}>
            <Container>
                <TitleBlock title={ titleData.title } text={ titleData.text }/>
                { feedbacks }
            </Container>
            </div>
        </div>
    );
};

export default FeedBacks;