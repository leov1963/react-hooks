import { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.initialNumber)


    return(
        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={()=> setCount( count + 1 )}>Add</button>
        </>
    )
}

export default Counter;