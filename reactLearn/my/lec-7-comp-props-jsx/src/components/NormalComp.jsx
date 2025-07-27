import React from "react";

class NormalComp extends React.Component {


    render() {
      console.log("NormalComponent rendered");
      return <h2>{this.props.name}</h2>;
    }
  }
  

  export default NormalComp;