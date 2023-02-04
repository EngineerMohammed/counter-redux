import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../store/CounterSlice";
import { login, logout } from "../store/AuthSlice";

const Counter = () => {
  // create aglobal use Selector state for all use selectors
  const globalSelector = useSelector((state) => state);
  // import Dispatch to send take the action
  const DispatchFunc = useDispatch();
   const isloggedin = () => {
     return globalSelector.auth.isLoggedin;
   };
    const counterHndeler = useCallback(
      (type, value) => {
        if (type === "increase") {
          DispatchFunc(increase(value));
        } else {
          DispatchFunc(decrease(value));
        }
      },
      [DispatchFunc]
  );
  
  useEffect(() => {
       counterHndeler("increase", 5);
  }, [counterHndeler]);
  
 
  const logginHandeler = (status) => {
    if (status) {
      DispatchFunc(logout());
    } else {
      DispatchFunc(login());
    }
  }; 


  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {isloggedin() && (
        <>
          <div className="counter">Counter :{globalSelector.Counter.value}</div>
          <div className="container">
            <button
              className="btn"
              onClick={() => counterHndeler("increase", 3)}
            >
              increase +
            </button>
            <button
              className="btn"
              onClick={() => counterHndeler("decrease", 3)}
            >
              decease -
            </button>
          </div>
        </>
      )}
      <div>
        <button className="btn" onClick={() => logginHandeler(isloggedin())}>
          {isloggedin() ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Counter;
