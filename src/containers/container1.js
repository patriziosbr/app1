import React, { Component } from "react";
import Component1 from "../functional/component1";

class Container1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            keyOne : 'one',
            prop2: 5
        }
    }
    // correct short hand
    changeState = () => {
        this.setState({prop2: this.state.prop2 + 1})
    }
    changeState2 = () => {
        this.setState({keyOne: this.state.keyOne + 'l'})
    }
    //wrong
    // changeState = ()=> {
    //     this.state.keyOne = 'pippo';
    // }
    //correct
    // changeState = () => {
    //     this.setState((prevState, props)=>({
    //         prop2: prevState.prop2 + 1
    //     })
    // )}

    render() {
        return (
            <div>
                {/* props: {this.props.nikcname}
                <br/>
                state: {this.state.prop2} */}
                <br/>
                <button onClick={()=> this.changeState()}>change state</button>
                <br/>
                <button onClick={()=> this.changeState2()}>change state2</button>
                state: {this.state.keyOne}

                <Component1 prop1={this.state.prop2}/>
            </div>
        )}
}

export default Container1;