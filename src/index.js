import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    teste() {
        this.setState({
            value: 'X'
        });
    }

    render() {
        return <button className="square" onClick={ () => this.teste() }>
            { this.state.value }
        </button>;
    }
}

function Board() {
    return (
        <div>
            <div className="board-row">
                <Square value="X"/>
                <Square value="O"/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square/>
                <Square/>
            </div>
        </div>
    );
}

// Criação do componente Game
function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>

            <div className="game-info">
                Info
            </div>
        </div>
    );
}

ReactDOM.render(
    // Elemento que será renderizado
    <Game/>,
    // Local em que esse elemento será renderizado
    document.getElementById('root')
);
