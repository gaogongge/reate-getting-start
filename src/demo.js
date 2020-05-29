import React from "react";
import ReactDOM from "react-dom";

class ComponentDemo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isChange:0
        }
    }
    render(){
        console.log("reload")
        return (
            <div onClick={()=>{this.handleClick()}}>
                this is Demo for reload starting!
            </div>
        )
    }
    handleClick(){
        console.log(this.state.isChange);
        this.setState({
            isChange:0
        })
    }
}

export {
    ComponentDemo
}

