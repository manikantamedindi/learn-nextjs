"use client";
import { useEffect, useState } from "react"
export default function Counter() {
  // const [name, setName] = useState("Punch");
  // const [color, setColor] = useState("blue");
  // const [brand, setBrand] = useState("Tata");
  // const [year, setYear] = useState(2024);

  // const [car, setCar] = useState({
  //   name: "punch",
  //   color: "blue",
  //   brand: "Tata",
  //   year: "2024",
  // });

  //! top update the object
  // const changeCar = () => {
  //   setCar((prev) => {
  //     return { ...prev, color: "red" };
  //   })
  // }
  // const [count, setCount] = useState(0);
  // const increaseCounter = () => {
  //   setCount(count => count + 1); // 1
  //   setCount(count => count + 1); // 2
  //   setCount(count => count + 1); // 3
  //   setCount(count => count + 1); // 4
  // }

  // useEffect
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Manikanta");
  const changeName = () => {
    setName("Medindi")
  }
  useEffect(() => {
    return () => {
      setTimeout(() => {
        setCount(count => count + 1)
      }, 1000);
    };
  }, [name]);

  return (
    <>
      <h1>I&apos;ve rendered {count} times!</h1>

      <button onClick={changeName}>Change Name {name} </button>

      {/* <h1>Count {count}</h1>
      <button onClick={increaseCounter}>Increase counter by 4</button> */}
    </>
  )
}