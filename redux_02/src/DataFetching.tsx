import { useEffect, useRef, useState } from 'react'
interface album{
    id:number;
    useId:number,
    title:string;
}
export default function DataFetching() {
    const Base_URL= "https://jsonplaceholder.typicode.com"
    const [data,setData]=useState<album[]>([])
    const [error,setError]=useState(false)
    const [loading,setLoading]=useState(false)
    const [page,setPage]=useState(1)
    const abortController = useRef<AbortController | null>(null)
    useEffect(()=>{
        
            const dataFetch = async()=>{
                
                abortController.current?.abort()
                abortController.current=new AbortController()
                setLoading(true)
                
            try{
                const res = await fetch(`${Base_URL}/albums?page=${page}`,{
                    signal:abortController.current?.signal
                })
                const data = await res.json() as album[]
                setData(data)
            }catch(e:any){
                // console.log(e);
                if(e.name==="AbortError"){
                    console.log("abort error");
                    
                    return
                }
                
                
                setError(true)
            }finally{
                setLoading(false)
            }
        }

        dataFetch()
        
    },[page])
    if(error){
        return <h1>Erro while fetching</h1>
    }
  return (
    <div>
      <h1>DATA FETCHING</h1>
      <button onClick={()=>setPage(page=>page+1)}>nextpage ({page})</button>
      {loading && <div>loading....</div>}
      { !loading&&  data.map(album=>{
        return(
            <div>{album.id}  {album.title}</div>
        )
      })}
    </div>
  )
}


