import React from "react";
class PureComp extends React.PureComponent {
    render() {
        console.log("PureComponent rendered");
        return <h2>{this.props.name}</h2>;
    }
}

export default PureComp;


