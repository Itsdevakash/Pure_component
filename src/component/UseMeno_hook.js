import React,{useState,useMemo} from 'react'

export default function UseMeno_hook() {
   const [count, setcount] = useState(0);
   const[item,setItem]=useState(10);

   const multiCountMeno=useMemo(function multiCount(){
  console.log("ok")
    return count*5
   },[count])
   
  return (
    <div>
      <h2>{count},{item}</h2>
      <h2>{multiCountMeno}</h2>
      <button onClick={()=>setcount(count+1)}>Update Count</button>
      <button onClick={()=>setItem(item*10)}>Update Item</button>
    </div>
  )
}
