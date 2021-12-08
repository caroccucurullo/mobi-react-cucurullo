import React from 'react'
import {useCounter} from '../hooks/useCounter'

const ItemCount =  ( {initial} ) => {

    const {counter, increment, decrement, reset} = useCounter (initial)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment} >+</button>
            <button onClick={decrement} >-</button>
            <button onClick={reset} >Reset</button>
        </div>
    )
}

export default ItemCount