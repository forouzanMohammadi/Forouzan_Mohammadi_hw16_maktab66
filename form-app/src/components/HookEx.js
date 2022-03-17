import React, { useState, useEffect, useRef, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";

function HookEx() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));
  const [value1, setValue1] = useState("hi");
  const [value2, setValue2] = useState("bi");
  const Ref1 = useRef(null);
  const Ref2 = useRef(null)

 
const memorizevalue1 = useCallback(()=>{
    setValue1(Ref1.current.value)

},[value1])

const memorizevalue2 = useCallback(()=>{
    setValue2(Ref2.current.value)

},[value2])

  return (
    <div>
      <div className="value-1">
        first value: <Title>{value1}</Title>
        <br />
        change first value:
        <input ref={Ref1} type="text"/>
        <Button onClick={memorizevalue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{value2}</Title>
        <br />
        change second value:
        <input  ref={Ref2} type="text"/>
        <Button onClick={memorizevalue2}> change </Button>
      </div>
    </div>
  );
}

export default HookEx;
