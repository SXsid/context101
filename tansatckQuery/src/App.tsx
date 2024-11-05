import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Fetch from "./Fetch"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Fetch/>
    </QueryClientProvider>
  )
}

export default App
