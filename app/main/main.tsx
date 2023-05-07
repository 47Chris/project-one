"use client"

import { useState } from "react";

export default function Main() {
    const [count, setCount] = useState(0)

    function onAdd() {
        setCount(count + 1);
        setCount((c) => {
            console.log(`Count: ${c}`);
            return c;
        })
    }

    

    return (
        <div>
            <button onClick={onAdd}>Add</button>
            <p>Count: {count}</p>
        </div>
    );
}