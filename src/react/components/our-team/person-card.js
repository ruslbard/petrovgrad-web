import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import './person-card.css';

class PersonCard extends React.Component {

    constructor (props, context) {
        super(props, context);
        this.state = {
            handleShow: props.handleShow,
            code: props.code,
            name: props.name,
            teamFunction: props.teamFunction,
            src: require('./person-photos/' + props.code + '.jpg')
        };
    };

    render() {
        return (
            <div className={"text-center"}>
                <div className={"person-photo"}>
                    <Image fluid src={this.state.src}/>
                </div>
                <div className={"person-name"}>
                    <span>{this.state.name}</span>
                </div>
                <div className={"person-function"}>
                    <span>{this.state.teamFunction}</span>
                </div>
                <div className={"pb-3"}>
                    <Button className={"btn send-button person"} onClick={ this.state.handleShow }>СВЯЗАТЬСЯ</Button>
                </div>
            </div>
        );
    }
}

export default PersonCard;