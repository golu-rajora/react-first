import { useEffect } from "react";

function App(){

  useEffect(()=>{
console.log("hello world ", 2+2)
  },[])


  return <h1>{2+2}</h1>
}
export default App;