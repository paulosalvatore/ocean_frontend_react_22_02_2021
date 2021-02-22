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

class Board extends React.Component {
    renderSquare() {
        return <Square value="X" onClick={ () => this.props.onClick() }/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    { this.renderSquare() }
                    { this.renderSquare() }
                    { this.renderSquare() }
                </div>
                <div className="board-row">
                    { this.renderSquare() }
                    { this.renderSquare() }
                    { this.renderSquare() }
                </div>
                <div className="board-row">
                    { this.renderSquare() }
                    { this.renderSquare() }
                    { this.renderSquare() }
                </div>
            </div>
        );
    }
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
