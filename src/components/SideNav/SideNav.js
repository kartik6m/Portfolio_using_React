import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars2.githubusercontent.com/u/26179770?s=400&u=c192e93f9e95569393dc3ba8875e3214940ff01e&v=4"
                className="avatar"
                alt="avatar"
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