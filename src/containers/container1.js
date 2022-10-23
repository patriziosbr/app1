import React, { Component } from "react";

import * as ACTION_TYPE from '../../src/store/actions/actions_type';
import * as ACTION from '../../src/store/actions/actions';

import {connect} from 'react-redux';
import { FAILURE, SUCCESS } from "../../src/store/actions/actions_type";


class Container1 extends Component {
    

    render() {
        return (
            <div>
               <button onClick={() => console.log(this.props.stateprop1)}>Get state</button>
               <button onClick={() => this.props.action1()}>Dsipacth action 1</button>
               <button onClick={() => this.props.action2()}>Dsipacth action 2</button>
            </div>
        )}
}

function mapStateToProps(state) {
    return {
        stateprop1 : state.stateprop1
    }
}

function mapDispatchToProps(dispatch) {
    return {
        action1: ()=> dispatch(ACTION.SUCCESS),
        action2: ()=> dispatch(ACTION.FAILURE)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Container1);