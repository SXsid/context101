import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthContextProvider } from './context/context.tsx'
import { SelfAuthProvider } from './Self/SelfContext/Context.tsx'
import Main from './Self/Pages/Main.tsx'
//we will fetch teh uesr seesion value and updatge hte  is logges in boool so the value of user will be 1 or a truthy value (in idela world the id will also pass down as value)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <SelfAuthProvider isLoggedIn={false}>
      <Main/>
    </SelfAuthProvider>
  </StrictMode>,
)
