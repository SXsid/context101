
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from './app/store'
import {increment,decrement,incrementAsync} from "./features/Counterslice"
import DataFetching from './DataFetching'
import Posts from './Posts'
import Albums from './Albums'

function App() {
 

  return (
    <>
     <Posts/>
     {/* <Albums/> */}
    </>
  )
}


function Counter(){
  const value = useSelector((state:RootState)=>state.counter.value)
  const dispatch =useDispatch<AppDispatch>()
  return(
    <>
    <div>{value}</div>
    <button onClick={()=>dispatch(increment({amount:100}))}>Increment</button>
    <button onClick={()=>dispatch(decrement({amount:50}))}>Decrement</button>
    <button onClick={()=>dispatch(incrementAsync(50))}>AyscIncre</button>
    </>
  )
}


export default App
