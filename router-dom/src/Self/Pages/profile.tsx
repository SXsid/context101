
import { useSelfAuth } from '../SelfContext/Context'

function Profiles() {
    const user = useSelfAuth()
  return (
    <div>
        hi user {user?.id}
      
    </div>
  )
}

export default Profiles
