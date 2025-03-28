import React, { useState } from "react";

export default function Greet() {
    let [name, setName] = useState("Kiran"); //State variable
    let toggle = false

    const update = () => {
        if(toggle) {
            setName("KL");
            toggle = false;
        } else {
            setName("Kiran");
            toggle = true;
        }
        
    }
    return (
            <>
            <h1>Hello, {name}</h1>
            <button onClick={update}> Click</button>
            </>
    )
}