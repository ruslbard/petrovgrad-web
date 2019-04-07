import React from 'react';

import './phone-info.css';

const PhoneInfo = ({ text }) => {

    return (
        <div className={"phone-info pre-header float-right"}>
            { text }
        </div>
    );
};

export default PhoneInfo;