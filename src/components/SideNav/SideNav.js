import React from 'react';

import './sidenav.css';
import dp from './dp.png'
export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={dp}
                
              className="avatar"  
            />
            <h2 className="main-name">Kartik Mehetre</h2>
            <p className="subtitle">"I know something of many things"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};