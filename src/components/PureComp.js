import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  //shouldComponentUpdate(nextProps, nextState)
  //currentProps vs nextProps (SC)
  //currentState vs nextState (SC)
  //primitive data type
  //array or object non-primitives // shallow comparison (reference - memory location)
  //a = {age:20} b = a return false
  //a = {age:20} b = {age:20} return true
  render() {
    console.log("PureComp");
    return <div>PureComp</div>;
  }
}

export default PureComp;
