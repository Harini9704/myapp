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
         <newpage />
         </div>
  );
}