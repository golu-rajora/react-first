import { useEffect } from "react";

function App(){

  useEffect(()=>{
console.log("hello world ", 2+2)
  },[])


  return <h1>{2+2} harshil is best coder </h1>
}
export default App;