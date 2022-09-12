import React,{useRef} from 'react'

export default function Ref_function() {

    let inputRef = useRef(null)
    function get(){
      inputRef.current.style.display ="none"
    }
  return (
    <div>
       <input type="text" ref={inputRef} />
       <button onClick={get}>Click REF</button>
    </div>
  )
}
