import React  from "react";
import ReactDOM from "react-dom";
import "./index.css"
class Square extends React.Component{   
    render(){        
        return (
            <button className="square" onClick={()=>{this.props.onClick()}}>
                {/*当点击时，触发通过props接收的父组件的方法。 */}
                {this.props.value} { /*使用props显示父组件中保存的数据*/}                   
            </button>
        )
    }
}
class Board extends React.Component{
    constructor(args){
        super(args);
        this.state={
            squares:Array(9).fill(null)
        }
    }
    renderSquare(index){
        return (
            <Square 
            value={this.state.squares[index]}
            onClick={()=>{this.handleClick(index)}}
            /> 
            /*这里通过props方式传递参数value，
            以及函数onClick；
            此处子组件的展示数据部分就跟父组件的state数据绑定了*/
        )
    }
    render(){
        const status="next player: X";
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
    handleClick(index){
        const squares=this.state.squares.slice();
        squares[index]="X";
        this.setState({squares})
    }
}

class Game extends React.Component{
    render(){
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
    <Game/>,
    document.getElementById("root")
)