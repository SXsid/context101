import { useParams } from "react-router-dom"


function Reels() {
  const data =useParams<{id:string}>()
  return (
    <div>
      dskjfds
      <h1>{data.id}</h1>
    </div>
  )
}

export default Reels
