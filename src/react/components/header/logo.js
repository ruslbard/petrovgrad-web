import React from 'react';
import {Navbar, Image} from 'react-bootstrap'

import './logo.css';

const Logo = () => {

    return (
        <Navbar.Brand className={"logo"}>
            <Image src={require('./images/logo.svg')}/>
        </Navbar.Brand>
    );
};

export default Logo;