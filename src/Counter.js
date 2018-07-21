import React, { Component } from 'react'

class Counter extends Component{

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    
    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div>
                <h1>Counter</h1>
                <p>{this.state.count}</p>
                <button onClick={this.increase}>Count</button>
            </div>
        )
    }
}

export default Counter