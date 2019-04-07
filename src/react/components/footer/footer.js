import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import SocialIcons from "../commons/social-icons";
import './footer.css';

const Footer = ({conf}) => {

    return (
        <div className={"black-section"}>
            <div className={"section footer"}>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div>
                                <Image fluid src={require('./images/new_logo_grey.svg')}/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <SocialIcons addStyle={{float: 'left', color: 'white'}}/>
                        </Col>
                    </Row>
                    <Row className={"align-items-end justify-content-center"}>
                        <Col sm={4} xs={12}>
                            <div className={"phone-info footer"}>
                                <span>{conf.phoneText}</span>
                            </div>
                            <div className={"other-info"}>
                                <span>{conf.email}</span>
                            </div>
                        </Col>
                        <Col sm={4} xs={12}>
                            <div className={"other-info"}>
                                <span>️<i className={"fa fa-copyright"}/> 2019 Петровград недвижимость</span>
                            </div>
                        </Col>
                        <Col sm={4} xs={12}>
                            <div className={"other-info"}>
                                <span>Пользовательское соглашение</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;