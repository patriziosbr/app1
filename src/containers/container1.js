import React, { Component } from "react";

class Container1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            keyOne : 'one'
        }
    }

    //correct
    changeState = () => {
        this.setState({keyOne:'new data'})
        if(this.state.keyOne) {

        }
    }
    render() {
        return (
            <div>
                props: {this.props.nikcname}
                <br/>
                state: {this.state.keyOne}
                <br/>
                <button onClick={()=> this.changeState()}>change state</button>
            </div>
        )}
}

export default Container1;