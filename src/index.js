import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
// import {ComponentDemo} from "./demo"
class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => { this.props.onClick() }}>
                {/*当点击时，触发通过props接收的父组件的方法。 */}
                {this.props.value} { /*使用props显示父组件中传递的数据*/}
            </button>
        )
    }
}
class Board extends React.Component {
    renderSquare(index) {
        return (
            <Square
                value={this.props.value[index]}
                onClick={() => { this.props.onClick(index) }}
            />
            /*这里通过props方式传递参数value，
            以及函数onClick；
            此处子组件的展示数据部分就跟父组件的state数据绑定了*/
        )
    }
    render() {
        return (
            <div>
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
}

class Game extends React.Component {
    /**
     * 构造的时候，初始化一个state
     * @param {参数}} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            histroy: [{ squares: Array(9).fill(null) }],
            squares: Array(9).fill(null),
            isNextX: true
        }
    }
    render() {
        console.log("reload")
        let status = "next player: X";
        //每次渲染页面之前，判断时候已经已经胜负已分；
        let winner = calculateWinner(this.state.squares);
        if (winner) {
            status = "winner:" + winner;
        } else {
            status = "next player:" + (this.state.isNextX ? "X" : "O");
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        value={this.state.squares}
                        onClick={(index) => { this.handleClick(index) }}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        )
    }
    handleClick(index) {
        if (calculateWinner(this.state.squares) || this.state.squares[index]) {
            return;
            /**
             * 这是当已经有了胜者，封盘。点击不能再落子；
             * 或者点击的位置已经有子，无法在此处再落子
             */
        }
        //把落子的情况记录到数组中；
        let squares = this.state.squares.slice();
        squares[index] = this.state.isNextX ? "X" : "O";
        //记录下一步谁改下：
        //重点使用setstate 能够触发重新渲染，如果只是修改state内部属性，无法触发DOM渲染
        this.setState({
            histroy: this.state.histroy.concat({squares}),
            squares,
            isNextX: !this.state.isNextX
        });
        // this.state={
        //     histroy: this.state.histroy.concat({squares}),
        //     squares,
        //     isNextX: !this.state.isNextX
        // }
    }
}
ReactDOM.render(
    <div>
        <Game/>
    </div>,
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