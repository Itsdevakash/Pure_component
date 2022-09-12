import React from 'react'

export default function Parent_component(props) {
    const data="Akash Maurya"
  return (
    <>
    <h3>Name: </h3>
    <button onClick={()=>props.alert(data)}>Click Me</button>
      
    </>
  )
}
