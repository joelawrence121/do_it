import React, {useEffect, useState} from 'react';
import './Board.css';

const Board: React.FC = () => {

    return (
        <section className="grid-layout">
            <div className="section menu">
                Menu
            </div>
            <div className="section images">
                Images
            </div>
            <div className="section result">
                Result
            </div>
        </section>
    );
}

export default Board;
