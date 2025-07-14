import React, { Component } from 'react'
import Counter from './components/Counter';
import Counter2 from './components/Counter2';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    console.log("ComponentDidMount : when component render first time");
  }



  increment(){
    this.setState({count: this.state.count + 1});
  }

  componentWillUnmount(){
    console.log("ComponentWillUnmount : when component unmount");
  }

  render() {
    return (
      <div>
        {/* <Counter number={this.state.count} /> */}
        <Counter2  number={this.state.count} />
        {/* <button onClick={()=> this.increment()}>Click Me!!</button> */}
      </div>
    )
  }
}
