import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const counterLst = useSelector((state) => state.counterLst);
  const dispatch = useDispatch();
  return (
    <div className="Counter">
      <div className="Counter-header">
        <h1>Counter : {counter}</h1>
        <div className="Counter-content">
          <button
            className="button"
            onClick={() => {
              dispatch({ type: "INCREMENT" });
            }}
          >
            Increment
          </button>
          <button
            className="button"
            onClick={() => {
              dispatch({ type: "DECREMENT" });
            }}
          >
            Decrement
          </button>
          <button
            className="button"
            onClick={() => {
              dispatch({ type: "ADD-COUNTER" });
            }}
          >
            Add Element
          </button>
        </div>
        <ul>
          {counterLst.map((elems) => {
            return <li key={elems.key} onClick = {()=>{dispatch({type : 'DELETE-COUNTER', value : elems.key})}}>{elems.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Counter;