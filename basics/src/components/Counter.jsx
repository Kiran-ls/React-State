import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0); //state variable
    const update = () => {
        setCount(++count);
    }

    const decrease = () => {
        setCount(--count);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <>
            <h1>Count: {count}</h1>
            <button onClick={update}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
            </>
        </div>
    )
}