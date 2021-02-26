import { useState, useEffect } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(props.initialNumber)

    const updateByFive = () => {
        setCount(count + 5)
    }

    // runs on first mount componentDidMount
    // && runs on every update componentDidUpdate
    useEffect(() => {
        console.log('hello')
    }, []); // <--- this empty array makes it only run on mount, good for api fetches ect.

    useEffect(() => {
        console.log('heyy')
    }, [count]);

    return(
        <>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={updateByFive}>Add</button>
        </>
    )
}

export default Counter;