import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };
    }

    render() {
        return <button className="square" onClick={ this.props.onClick }>
            { this.state.value }
        </button>;
    }
}

function Board(props) {
    return (
        <div>
            <div className="board-row">
                <Square value="X" onClick={ () => props.onClick() }/>
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
class Game extends React.Component {
    handleClick() {
        alert('square foi clicado!');
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={ () => this.handleClick() }/>
                </div>

                <div className="game-info">
                    Info
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    // Elemento que será renderizado
    <Game/>,
    // Local em que esse elemento será renderizado
    document.getElementById('root')
);
