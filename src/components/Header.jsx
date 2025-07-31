import React from 'react';

const Header = () => {
    return (
        <div className="heading level-y flex">
            <h1 className="flex-1 title">
                <a href="/">2048</a>
            </h1>
            <div className="shrink scores-container">
                <div className="score-container">0</div>
                <div className="best-container">3000</div>
            </div>
        </div>
    );
};

export default Header;
