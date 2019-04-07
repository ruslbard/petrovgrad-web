import React from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap';

import TitleBlock from "./title-block";

import './request-form.css';

class RequestForm extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            show: props.show,
            parent: props.parent,
            handleHide: props.handleHide,
        }
    }

    sendForm = (event) => {
        event.preventDefault();
        return fetch('http://localhost:8080/petrovgrad-web/sendMail', {
            method: 'get',
            headers: {'Content-Type':'application/json'},
            body: {
                name: 'ruslbard',
                email: 'rbardashov@gmail.com',
                phone: '+79818420468',
            }
        }).catch(reason => {

            console.log(reason)
        });
    };

    render () {

        const titleData = {
            title: "Оставьте заявку",
            text: "Введите, пожалуйста, свои данные, оставьте заявку на бесплатную консультацию и наш специалист свяжется с вами в ближайшее время."
        };

        return (
            <Modal
                show={this.state.parent.state.show}
                onHide={this.state.handleHide}
                dialogClassName={"request-form"}

            >
                <Modal.Header closeButton/>
                <Modal.Body>
                    <Container>
                        <TitleBlock title={titleData.title} text={titleData.text} color={"none"}/>
                        <Form onSubmit={ this.sendForm }>
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="text" placeholder="Ваше имя"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Ваш email"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPhone">
                                <Form.Control type="phone" placeholder="Номер телефона"/>
                            </Form.Group>
                            <p>
                                Нажимая кнопку «Отправить» вы подтверждаете свое согласие на обработку персональных
                                данных.
                            </p>
                            <Button
                                className={"btn send-button person"}
                                variant="primary"
                                type="submit"
                            >
                                отправить
                            </Button>
                        </Form>
                    </Container>
                </Modal.Body>
            </Modal>
        )
    }
}

export default RequestForm;