
import { useState } from 'react'
import { useAddPostMutation, useGetPostsQuery } from './features/PostApiSlice'

function Posts() {
    //if we don't use the custom hook we cant get the is loading and is error things
    const [input,setInput]=useState("")
    const {data:posts,isLoading,isError} = useGetPostsQuery({})
    const [createPost,{isLoading:creatingPost}]=useAddPostMutation()
    if(isError){
        return <div>error occured!!</div>
    }
  return (
   <div>
    <input type='text' value={input} placeholder='title' onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={()=>{
        createPost({title:input})
        console.log(input);
        setInput("")
        
    }}>{creatingPost?"creating the post":"add post"}</button>
    {input??<p>{input}</p>}
     <ol>
        {isLoading && <div>loading....</div>}
        {!isLoading &&   posts?.map((post:any)=>{
            return(
                <li key={post.id}>{post.title}</li>
            )
        })}
    </ol>
   </div>
  )
}

export default Posts
