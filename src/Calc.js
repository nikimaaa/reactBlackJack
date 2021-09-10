import React, { useEffect, useState } from "react"


const Calc = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`State was changed current state: ${count}`)
    }, [count])

    const onPlusClick = () => {
        setCount(count + 1);
    }

    const onMinusClick = () => {
        setCount(count - 1);
    }

    return(
        <div className='calc'>
            <span>{count}</span>
            <button onClick={onPlusClick}>+</button>
            <button onClick={onMinusClick}>-</button>
        </div>
    )
}

export default Calc