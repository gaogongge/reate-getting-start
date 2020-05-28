import React  from "react";
import ReactDOM from "react-dom";
import "./index.css"
class Square extends React.Component{
    constructor(args){
        /**
         * 通过父类构造
         */
        super(args);  
        this.state={
            value:this.props.value /**构造时，创建状态state并存储props传递的参数 */
        }
    }
    render(){        
        return (
            <button className="square" onClick={()=>{this.setState({value:"X"})}}>
                {/*当点击是，修改state状态 */}
                {this.state.value} { /*使用state显示数据*/}                      
            </button>
        )
    }
}
class Board extends React.Component{
    renderSquare(index){
        return (
            <Square value={index}/> 
            /*这里通过props方式传递参数value*/
        )
    }
    render(){
        const status="next player: X";
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                </div>
            </div>
        )
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