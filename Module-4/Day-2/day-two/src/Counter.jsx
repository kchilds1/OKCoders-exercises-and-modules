import { useState } from "react";

 const Counter = () => {
    const [counter, setCounter] = useState(0);
    //console.log(counter)

    const increaseCounter = () => {
        setCounter(prevValue =>{ 
            //console.log(prevValue);
            return prevValue + 1;
    })
}

    return (
      <>
        <div>Counter: {counter}</div>
        <button onClick={increaseCounter}
        >
                Increase Counter
        </button>
      </>
    );
};

export default Counter;