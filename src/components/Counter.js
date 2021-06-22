import React, { useState } from "react";

const Counter = () => {
  // state변수를 선언하는 방법
  // React Hooks에서 useState Hook을 사용하는방법
  // const [state 변수명, state변수함수명] = useState(state변수의 초기값)

  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          increaseCounter();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
