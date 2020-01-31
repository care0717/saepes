import React from 'react';
import './App.css';

const Board: React.FC = () => {
    return (
        <div className="Board">

        </div>
    );
}

const Row: React.FC = () => {
    return (
        <Cell />
    )
}

const Cell: React.FC = () => {
    return (
        <div></div>
    )
}

export default Board;
