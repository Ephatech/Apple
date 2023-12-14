import React from 'react';
import { useState } from 'react';

const IncreaseDecreaseCounter = () => {

   const[counter, setCounter] = useState(0);

   const inc = () => {
    setCounter(counter+1);
   };

   const dec = () => {
    setCounter(counter-1);
   };

   const res = () => {
    setCounter(0);
   };

    return (
        <div>
            <h2>Using Hooks Value = {counter}</h2>
            <button onClick={inc}>Up</button><br/>
            <button onClick={dec}>Down</button><br/>
            <button onClick={res}>Reset</button><br/><br/><br/><br/><br/>
        </div>
    );
}

export default IncreaseDecreaseCounter;
