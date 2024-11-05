import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Album{
    userId:number,
    id:number,
    title:string
}
interface Posts{
    id:number,
    title:string
}


export const  postSlice = createApi({
    reducerPath:"postfetching",
    baseQuery:fetchBaseQuery({
        baseUrl:`https://jsonplaceholder.typicode.com`
    }),
    //act like extrareducer
    endpoints:(builder)=>{
        return {
            getPosts:builder.query({
                query:()=>"/posts"
            }),
            getAlbums:builder.query<Album,{num:number}>({
                query:({num})=>`/albums/${num}`
            }),
            addPost:builder.mutation<Posts,{title:string}>({
                query:({title})=>{
                    return{
                        url:"/posts",
                        method:"POST",
                        body: title
                    }
                }
            })

            // this all was jsut ot retivew the data wiht all or with conditinals but what if we wantsend  the data we need mutaluins
        }
    }
})
//we nedd custom to directly get the extra benits of rtk query
export const {useGetAlbumsQuery,useGetPostsQuery,useAddPostMutation} = postSlice
export default postSlice.reducer;