import NormalComponent from "./NormalComponent";
import MyPureComponent from "./MyPureComponent";
import { useState } from "react";
import ClickCounter from "./ClickCounter";
import HoverComp from "./HoverComp";

function App()
{
  const[count,setCount]= useState(0);
  const increment = () =>{
    setCount(count+1);
  };
  return(
    <div className="color">
      <h1 className="text">React Handson-5</h1>
      {/* <NormalComponent count={count}/> */}
      <MyPureComponent count={count}/>
      <div className="flex">
      <button onClick={()=>{
        increment();
      }} >➕</button>
</div>
 
         <ClickCounter/>
      <HoverComp/>
    </div>
  );
}
export default App;