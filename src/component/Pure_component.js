import React, { Component,PureComponent } from 'react'

export default class Pure_component extends PureComponent {
    constructor(){
        super();
        this.state={
            count:1
            
        }
    }
  render() {
    console.log('Rerending')
    return (
      <>
      <h1>State</h1>
      <h1>{this.state.count}</h1>
      <button onClick={()=>this.setState({count:this.state.count+1})}>Rerending</button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>this.setState({count:1})}>Same Data Not Rerending</button>

    
      </>
    )
  }
}
