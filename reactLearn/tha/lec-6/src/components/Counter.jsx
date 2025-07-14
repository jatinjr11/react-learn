import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevprops, prevState) {
        // console.log("ComponentDidUpdate : when component update");
        console.log(prevprops.number);
        console.log(this.props.number);

        if (prevprops.number !== this.props.number) {
            console.log("ComponentDidUpdate : when component update");
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}
