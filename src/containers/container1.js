import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

class Container1 extends Component {
    // LEGACYCODE FORM
    // constructor(props){
    //     super(props)
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // } 
    // RENDERE LE FUNZIONI SUCCESSIVE NORMALI E NON ARROW FUNCTION

    state = {
        value: ''
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState( {value : event.target.value});
        // console.log(this.state.value);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log( this.state.value)
    }

    render() {
        return (
            <div>
                {this.state.value}
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input id="name" onChange={this.handleChange} type="text" />
                    <button>Submit</button>
                </form>
            </div>
        )}
}

export default Container1;