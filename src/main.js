import { useEffect, useState } from "react";
import React from "react";

export function H1(props) {
  const [timer, setTimer] = useState(props.start);
  const [inShow, show] = useState(false);
  console.log(timer);

  useEffect(() => {
    if (timer == 0) {
      show(true);
    }
  }, [timer]);

  useEffect(() => {
    let a = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(a);
  }, [timer]);

  return (
    <>
      Timer: {timer>0?timer:0}
      {inShow ? <h2>dzer jamanak@ verjacel e</h2> : null}
    </>
  );
}
