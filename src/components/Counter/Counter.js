import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'


export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
          <div>
            <button onClick={() => dispatch(increment())}>
              Increment
            </button><br/>
            <span>{count}</span><br/>
            <button onClick={() => dispatch(decrement())}>
              Decrement
            </button><br/>
          </div>
        </div>
      )

}