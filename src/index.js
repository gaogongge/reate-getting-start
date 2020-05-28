import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => { this.props.onClick() }}>
                {/*当点击时，触发通过props接收的父组件的方法。 */}
                {this.props.value} { /*使用props显示父组件中保存的数据*/}
            </button>
        )
    }
}
class Board extends React.Component {
    constructor(args) {
        super(args);
        this.state = {
            squares: Array(9).fill(null),
            isNextX:true
        }
    }
    renderSquare(index) {
        return (
            <Square
                value={this.state.squares[index]}
                onClick={() => { this.handleClick(index) }}
            />
            /*这里通过props方式传递参数value，
            以及函数onClick；
            此处子组件的展示数据部分就跟父组件的state数据绑定了*/
        )
    }
    render() {
        let status = "next player: X";
        //每次渲染页面之前，判断时候已经已经胜负已分；
        let winner = calculateWinner(this.state.squares);
        if (winner) {
            status = "winner:" + winner;
        } else {
            status = "next player:" + (this.state.isNextX ? "X" : "O");
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
    handleClick(index) {
        //复制一份新的数据
        const squares = this.state.squares.slice();
        if(calculateWinner(squares)||squares[index]){
            return;
            /**
             * 这是当已经有了胜者，封盘。点击不能再落子；
             * 或者点击的位置已经有子，无法在此处再落子
             */
        }
        //把落子的情况记录到数组中；
        squares[index] = this.state.isNextX ? "X" : "O";

        //用新的数据替换旧数据，这里用完整替换的方式，是为了“时间穿梭”后续理解
        this.setState({
            squares,
            isNextX:!this.state.isNextX
        })
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Game />,
    document.getElementById("root")
)
/**
 * 判断胜负；返回X O  null
 */
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}