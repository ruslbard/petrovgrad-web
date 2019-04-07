import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PhoneInfo from "./phone-info";
import SocialIcons from '../commons/social-icons';

import './pre-header.css';

const PreHeader = ({conf}) => {

    return (
        <div className={"black-section"}>
            <Container>
                <Row className={"align-items-center justify-content-end app-header"}>
                    <Col sm={9} xs={6}>
                        <PhoneInfo text={conf.phoneText}/>
                    </Col>
                    <Col sm={3} xs={6}>
                        <SocialIcons floatStyle={{float: 'right', color: 'white'}}/>
                    </Col>
                </Row>
            </Container>


            {/*<div className={"container"}>*/}
                {/*<div className={"row align-items-center justify-content-end app-header"}>*/}
                    {/*<div className={"col col-sm-9 col-xs-6"}>*/}
                        {/*<PhoneInfo text={conf.phoneText}/>*/}
                    {/*</div>*/}
                    {/*<div className={"col col-sm-3 col-xs-6"}>*/}
                        {/*<SocialIcons/>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    );
};

export default PreHeader;