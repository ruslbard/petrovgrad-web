import React from 'react';
import {Navbar, Container, Image, Row, Col, Button} from 'react-bootstrap';

import Logo from "./logo";
import Nav from "react-bootstrap/Nav";

import './header.css';

class Header extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            conf: props.conf,
            handleShow: props.handleShow,
            navExpanded: false,
        };
    }

    onToggleNav = (expanded) => {
        this.setState({
            navExpanded: expanded,
        });
    };

    onSelect = () => {
        this.setState({
            navExpanded: false,
        });
    };

    render(){

        const menuItems = this.state.conf.sections.map(({code, label}) => {

            return (
                <Nav.Link id={code} href={"#" + code}>{label}</Nav.Link>
            );
        });

        return (
            <div className={"header-section"}>
                <Container>
                    <Row>
                        <Col>
                            <Navbar
                                expanded={this.state.navExpanded}
                                expand={"lg"}
                                className={"p-0 m-0"}
                                onToggle={this.onToggleNav}
                            >
                                <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
                                <Navbar.Toggle aria-controls={"petrovgrad-navbar"}/>
                                <Navbar.Collapse id={"petrovgrad-navbar"} className={"justify-content-end"}>
                                    <Nav
                                        className={"mr-0"}
                                        onSelect={this.onSelect}>
                                        {menuItems}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row className={"header-info align-items-end"}>
                        <Col sm={7} className={"header-info-col"}>
                            <h1 className={"header-info-title"}>Все операции с недвижимостью</h1>
                            <p className={"header-info-text"}>Грамотно построенный процесс в нашей работе, умение
                                максимально
                                выгодно продать или купить, отстаивая интересы клиента – это то, чем мы выгодно
                                отличаемся от других!</p>
                            <Button className={"btn send-button"} onClick={ this.state.handleShow }>СВЯЗАТЬСЯ</Button>
                        </Col>
                        <Col sm={5}>
                            <Image fluid src={require('./images/image.svg')}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Header;