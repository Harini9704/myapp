"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from "react"
export default function Home() {
  const [count,setCount]=useState(0);
  function fn (){
     setCount(count+1)
  }
  return (
         <div><h1>num:{count}</h1>
         <button onClick={fn}>click</button>
         </div>
  );
}
export function school (){
  const [cnt,setCount]=usestate(0)
  function handleClick (){
    setCount (cnt+2);
    console.log(cnt);
  }
      return <div>
        <h1>{cnt}</h1>
        <button onClick={handleClick}>tap</button>
      </div>
}

