import React from 'react';
import {
    useParams,
} from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import rawMapData from '../map-data.json';

const maps = Object.fromEntries(rawMapData.map((mapData) => {
    return [
        mapData.key,
        {
            ...mapData,
            image: `/maps/${mapData.key}.jpg`,
        },
    ];
}));

function Map() {
    let {currentMap} = useParams();

    const { displayText,image } = maps[currentMap];

    return <TransformWrapper
        defaultScale={1}
        wheel = {{
            step: 200,
        }}
    >
        <TransformComponent>
            <div
                className = "map-image-wrapper"
            >
                <img
                    alt = {`Map of ${ displayText }`}
                    className = "map-image"
                    title = {`Map of ${ displayText }`}
                    src = {`${ process.env.PUBLIC_URL }${ image }`}
                />
            </div>
        </TransformComponent>
    </TransformWrapper>;
}

export default Map;
