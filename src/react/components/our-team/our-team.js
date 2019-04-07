import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TitleBlock from "../commons/title-block";
import PersonCard from './person-card';

import './our-team.css';

class OurTeam extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            team: props.team,
            handleShow: props.handleShow,
        };
    }

    render() {

        const titleData = {
            title: "Наша команда",
            text: "Наша команда – это специалисты по недвижимости с большим опытом, которые работали на других, а теперь решили объедениться в команду профессионалов. Мы всегда рады принять в нашу команду новых специалистов. Если у вас есть желание присоединиться к нашей команде обязательно свяжитесь с нами. Возможны разные варианты сотрудничества."
        };

        const personsCount = this.state.team.length;

        const cards = this.state.team.map(({code, name, teamFunction}) => {

            return (
                <Col sm={12 / personsCount} xs={12} className={"person-cards"}>
                    <PersonCard code={code} name={name} teamFunction={teamFunction}
                                handleShow={this.state.handleShow}/>
                </Col>
            );
        });

        return (
            <div id={"team"} className={"white-section"}>
                <div className={"section"}>
                    <Container>
                        <Row className={"justify-content-center pb-4"}>
                            <Col sm={6} xs>
                                <TitleBlock title={ titleData.title } text={ titleData.text }/>
                            </Col>
                        </Row>
                        <Row className={"justify-content-center"}>
                            { cards }
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default OurTeam;