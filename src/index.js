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

        if (squares[index] || calculateWinner(squares)) {
            return;
        }

        squares[index] = this.state.nextMove;

        const nextMove = this.state.nextMove === 'X' ? 'O' : 'X';

        this.setState({
            squares,
            nextMove
        });
    }

    restartGame() {
        this.setState({
            squares: Array(9).fill(null),
            nextMove: 'X'
        });
    }

    render() {
        const squares = this.state.squares;
        const nextMove = this.state.nextMove;

        const hasWinner = calculateWinner(squares);

        const winner = nextMove === 'X' ? 'O' : 'X';

        const filledSquares = squares.filter(Boolean);
        const draw = !hasWinner && squares.length === filledSquares.length;

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={ this.state.squares } onClick={ (index) => this.handleClick(index) }/>
                </div>

                <div className="game-info">
                    { !hasWinner && !draw ? 'Próxima jogada: ' + nextMove : '' }
                    { hasWinner ? winner + ' venceu!' : '' }
                    { draw ? 'Deu velha!!' : ''}<br/>
                    <br/>
                    <button onClick={ () => this.restartGame() }>Reiniciar Jogo</button>
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
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    /*
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const a = line[0];
        const b = line[1];
        const c = line[2];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return true;
        }
    }

    return false;
    */

    return lines.some(([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);
}
