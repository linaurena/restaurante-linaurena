import { useState } from 'react';

export const ItemCounter = ({ stock, initialValue, onAdd }) => {
    const { count, setCount } = useState(initialValue);

    const decrement = () => {
        if (count > initialValue) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>

            <button disabled={count === 0} className='card__add-btn' onClick={()=>onAdd(count)}>Add</button>
        </div>

    )
}