import React from 'react';
import {Modal, Button, Form, Container} from 'react-bootstrap';
import { notification } from 'antd';

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
        const form = new FormData(event.currentTarget);
        const data = JSON.stringify({
            name: form.get("name"),
            email: form.get("email"),
            phone: form.get("phone")
        });
        return fetch('/sendRequestFormToEmail', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data
        }).then(function(response) {

            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }

            return response.json();

        }).then(function(result) {

            if (result.result === 'ok') {

                console.log("ok");

            }

        }).catch(reason => {

            console.log(reason);

        }).finally( () => {
            notification.open({
                placement: "topLeft",
                message: "Ваша заявка была отправлена.",
                description: "Спасибо за ваше обращение. Наши специалисты свяжутся с вами в ближайшее время."
            });
            this.state.handleHide();
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
                                <Form.Control name="name" type="text" placeholder="Ваше имя" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control name="email" type="email" placeholder="Ваш email" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPhone">
                                <Form.Control name="phone" type="phone" placeholder="Номер телефона" />
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