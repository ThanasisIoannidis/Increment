import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);
 
    const increment = () => {
        setCount(count + 1);
    }

    return(<div>
        <h1>Welcome to the Counter!</h1>
        <p className="count-display">{count}</p>
        <button className="Increment-button" onClick={increment}>Increment</button>
    </div>); 
}
export default Counter 