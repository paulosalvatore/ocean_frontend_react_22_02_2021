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
    renderSquare(index) {
        return <Square value="" onClick={ () => this.props.onClick() }/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    { this.renderSquare(0) }
                    { this.renderSquare(1) }
                    { this.renderSquare(2) }
                </div>
                <div className="board-row">
                    { this.renderSquare(3) }
                    { this.renderSquare(4) }
                    { this.renderSquare(5) }
                </div>
                <div className="board-row">
                    { this.renderSquare(6) }
                    { this.renderSquare(7) }
                    { this.renderSquare(8) }
                </div>
            </div>
        );
    }
}

// Criação do componente Game
class Game extends React.Component {
    handleClick() {
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
