import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return <button className="square" onClick={ props.onClick }>
        { props.value }
    </button>;
}

class Board extends React.Component {
    renderSquare(index) {
        return <Square value={ this.props.squares[index] } onClick={ () => this.props.onClick(index) }/>;
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
    constructor() {
        super();

        // Defino o estado inicial do Game
        this.state = {
            squares: Array(9).fill(null),
            nextMove: 'X'
        };
    }

    handleClick(index) {
        const squares = this.state.squares;

        if (squares[index]) {
            return;
        }

        squares[index] = this.state.nextMove;

        const nextMove = this.state.nextMove === 'X' ? 'O' : 'X';

        this.setState({
            squares,
            nextMove
        });
    }

    render() {
        const squares = this.state.squares;
        const hasWinner = calculateWinner(squares);

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={ this.state.squares } onClick={ (index) => this.handleClick(index) }/>
                </div>

                <div className="game-info">
                    { hasWinner ? 'Alguém venceu!' : 'Jogo em andamento' }
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

function calculateWinner(squares) {
    return true;
}
