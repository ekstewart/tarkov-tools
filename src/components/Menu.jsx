import React from 'react';
import {
    Link
  } from "react-router-dom";

import MenuItem from './MenuItem';

import ammoData from '../data.json';
import mapData from '../map-data.json';

const ammoTypes = [...new Set(ammoData.data.map((ammoData) => {
    return ammoData.type
}))].sort();

function Menu() {    
    return <div
            className="menu" 
        >
            <Link
                className = "branding"
                to = '/tarkov-tools/'
            >
                Tarkov Tools
            </Link>
            <div
                className = "submenu-button"
            >
                Ammo
                <ul>
                {ammoTypes.map(ammoType => 
                    <MenuItem
                        to = {`/tarkov-tools/ammo/${ammoType}`}
                        key = {ammoType}
                    >
                        {ammoType}
                    </MenuItem>
                )} 
                </ul>
            </div>
            <div
                className = "submenu-button"
            >
                Maps
                <ul>
                {mapData.map(map => 
                    <MenuItem
                        to = {`/tarkov-tools/map/${map.key}`}
                        key = {map.key}
                    >
                        {map.displayText}
                    </MenuItem>
                )} 
                </ul>
            </div>
            <Link to="/tarkov-tools/barter">
                Loot tiers
            </Link>
            <a 
                href="https://developertracker.com/escape-from-tarkov/"
            >
                Dev tracker    
            </a>
    </div>;
}

export default Menu;

