//?===============================================
//?                USEEFFECT HOOK
//?===============================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ ComponentDidMount + componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]); //? Dependency Array

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //? componentDidMount
  //! fetch, asyn-await, localStorage, setTimeout, setInterval()
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("Data Fetched");
  //   }, 3000);
  // }, []);

  //? componentDidMount + componentDidUpdate
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("Data Fetched");
  //   }, 1000);
  // }, [count]);

  //? componentDidMount
  const fetchData = () => {
    console.log("Data Fetched");
  };
  useEffect(() => {
    //! componentDidMount
    const timerId = setInterval(fetchData, 1000);
    console.log("Mounting");

    return () => {
      //! componentWillUnMount
      clearInterval(timerId);
      console.log("Unmounting");
    };
  }, []);

  return (
    <div className="container text-center">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
