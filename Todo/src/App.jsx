import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import User from './pages/User'
import Navbar from './components/Navbar'

function App() {
  const { user } = useAuthContext()

  document.title = "Bitter"

  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/sign-in" 
              element={!user ? <Login /> : <Navigate to={`/${user?.username}`} />} 
            />
            <Route 
              path="/sign-up" 
              element={!user ? <Signup /> : <Navigate to={`/${user?.username}`} />} 
            />
            <Route 
              path="/" 
              element={<Home />} 
            /><Route 
              path="/:username" 
              element={<User />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App