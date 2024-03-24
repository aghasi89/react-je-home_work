import React,{ useCallback, useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import "./App.css";

function App() {
  const count = useRef(0)
  const input = useRef(null);
  const [timer,setTimer] = useState(0);
  const clickHandler = useCallback(()=>{
    //count.current++
    newRef.current.change(25);
  },[])
  const showHandler = useCallback(()=>{
    console.log(newRef.current.main);
    if(input.current){
      console.log(input.current.value);
    }
  },[])
  const newRef = useRef(15);

  console.log("Render");
  useEffect(()=>{
    const id =setInterval(()=>{
      setTimer(prev=>prev+1)
    },1500)
    return ()=>{
      clearInterval(id);
    }
  },[])
  return (
    <>
      <input type="text" ref={input}></input>
      
      <button ref={count} onClick={clickHandler}>Click Me</button>
      <HOCEL ref={newRef}/>
    </>
  );
}


function HOC(Element){
  return class extends React.Component {
    render(){
      return <Element name="FROM HOC"/>
    }
  }
}

function EL(props,ref){
  const [value,setValue] = useState(10);
  useImperativeHandle(ref,()=>{
    return {
      change:function (v){
        setValue(v)
      }
    };
  })
  return <p>Hello {value}</p>
}

export const HOCEL = forwardRef(EL);
export default App;
