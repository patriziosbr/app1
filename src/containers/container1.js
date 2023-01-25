import React, { Component } from "react";

import * as ACTION_TYPE from '../../src/store/actions/actions_type';
import * as ACTION from '../../src/store/actions/actions';

import {connect} from 'react-redux';
import { FAILURE, SUCCESS } from "../../src/store/actions/actions_type";




class Container1 extends Component {

    render() {
        const user_text = "text 1"
        return (
            <div>
               <button onClick={() => console.log(this.props.stateprop1)}>Get state</button>
               <button onClick={() => this.props.action1()}>Dsipacth action 1</button>
               <button onClick={() => this.props.action2()}>Dsipacth action 2</button>
               <button onClick={() => this.props.action_creator1()}>Dsipacth action 1</button>
               <button onClick={() => this.props.action_creator2()}>Dsipacth action 2</button>
               <button onClick={() => this.props.action_creator3(user_text)}>Dsipacth creator 3</button>
               {this.props.stateprop1 
                ? <h1>{this.props.user_input}</h1> 
                : null}
            </div>
        )}
}

function mapStateToProps(state) {
    return {
        stateprop1 : state.reducer1.stateprop1,
        user_input : state.user_reducer.user_text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action1: ()=> dispatch(ACTION.SUCCESS),
        action2: ()=> dispatch(ACTION.FAILURE),
        action_creator1: () => dispatch(ACTION.success()),
        action_creator2: () => dispatch(ACTION.failure()),
        action_creator3: (text) => dispatch(ACTION.user_input(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);