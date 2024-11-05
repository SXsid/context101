
import { useState } from 'react'
import { useGetAlbumsQuery } from './features/PostApiSlice'

function Albums() {
    const[input,setInput]=useState(0)
    const{data,isLoading} = useGetAlbumsQuery({
        num:input
    })
    if(isLoading){
        return <div>laoding!!</div>
    }
  return (
    <div>
        <input value={input} type='number' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInput(Number(e.target.value))}/>
        {data?.id}
        <div>{data?.title}</div>
    </div>
  )
}

export default Albums
