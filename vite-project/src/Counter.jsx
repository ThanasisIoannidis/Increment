import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);
 
    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return(<div>
        <h1>Welcome to the Counter!</h1>
        <p className="count-display">{count}</p>
        <button className="increment-button" onClick={increment}>Increment</button>
        <button className="reset-button" onClick={reset}>Reset</button>
        <button className="decrement-button" onClick={decrement}>Decrement</button>
    </div>); 
}
export default Counter 