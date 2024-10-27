
// import './App.css'
import { useEffect, useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'
import { ThemeProvider } from './Context2/ThemeContext'
import ThemeButton from './Components/ThemeButton'
import Card from './Components/Card'

function App() {
  const[theme,setTheme]=useState("dark")
  function lightTheme(){
    setTheme('light')
  }
  function darkTheme(){
    setTheme('dark')
  }

  //chagne the theme using the event fhadnle and in js(tun whenever theme get chaged)
  useEffect(()=>{
   const root = document.querySelector('html')
   root.classList.remove('dark',"light")
   root.classList.add(theme)
  },[theme])
  return (
    //first projext/ basic context 
    // <UserContextProvider>
    //  <div style={{display:"flex", justifyContent:"space-evenly", width: '100%'}}>
    //  <Login/>
    //  <Profile/>
    //  </div>
    // </UserContextProvider>


    //themee compo(having the defult value)
    <ThemeProvider value={{theme,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* <ThemeBtn /> */}
                  <ThemeButton/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
