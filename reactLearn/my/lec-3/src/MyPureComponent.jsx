import { Component, PureComponent } from "react";

class MyPureComponent extends Component{
    render(){
        console.log("MyPureComponent render  !!", this.props);
        return <h2>Hello, {this.props.name} & My Age is {this.props.age}</h2>
    }
}
export default MyPureComponent;