import React, { Component,createRef } from 'react'

export default class Ref extends Component {
    constructor(){
        super();
        this.inputRef = createRef();
    }
componentDidMount(){
    //console.log(this.inputRef.current.value="1000")
}
 get(){
   // this.inputRef.current.value="100"
    this.inputRef.current.style.color="red"
    this.inputRef.current.style.backgroundColor="black"
}
  render() {
    return (
      <div>
      <input type="text" ref={this.inputRef}/>
      <button onClick={()=>this.get()}>Click REF</button>
      </div>
    )
  }
}
