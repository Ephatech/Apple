import React from 'react';

const UseEffectForTitle = () => {

    const [count, setCount] = React.useState(0);

    React.useEffect(()=>{
        alert("Component is mounted");
    },[]);

    React.useEffect(()=>{
        document.title = "Count = " + count;
    },[count]);

    const updater = () =>{
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={updater}>Click Me</button>
            <h2>{count}</h2>
        </div>
    );
}

export default UseEffectForTitle;
