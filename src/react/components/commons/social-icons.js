import React from 'react';

import './social-icons.css';

const socialLinks = [
    {name: "youtube", link: "http://youtube.com"},
    {name: "vk", link: "https://vk.com/petrovgrad.realty?from=groups"},
    {name: "instagram", link: "https://www.instagram.com/petrovgrad.realty/?utm_source=ig_profile_share&igshid=z3ob71j85fx6"}
];

const SocialIcons = ({floatStyle: addStyle}) => {

    return (
        <div className={"d-flex"} style={ addStyle }>
            <a id={socialLinks[0].name} href={socialLinks[0].link}><i className={"fa fa-youtube-play social-icon"}></i></a>
            <a id={socialLinks[1].name} href={socialLinks[1].link}><i className={"fa fa-vk social-icon"}></i></a>
            <a id={socialLinks[2].name} href={socialLinks[2].link}><i className={"fa fa-instagram social-icon"}></i></a>
        </div>
    );
};

export default SocialIcons;