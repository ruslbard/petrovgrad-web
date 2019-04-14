import React from 'react';
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';

import './location.css';

const Location = ({x, y, zoom, conf}) => {

    return (
        <div id={"location"} className={"location"}>
            <YMaps >
                <Map defaultState={{center: [x, y], zoom: zoom, behaviors: []}} width={"100%"} height={"100%"}>
                    <Placemark geometry={[x, y]} properties={{iconContent: conf.logoText + ' ' + conf.address.address}} options={{preset:'islands#blackStretchyIcon', draggable: false}}/>
                    <ZoomControl />
                </Map>
            </YMaps>
        </div>
    );
};

export default Location;