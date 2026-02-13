import "./app.scss"
import Login from "./components/pages/login/Login"
import Register from "./components/pages/register/Register"
import Watch from "./components/pages/watch/Watch"
import Home from "./components/pages/home/Home"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext"


const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"
          element={user ? <Home /> : <Navigate to="/register" />} />

        <Route path="/register"
          element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login"
          element={!user ? <Login /> : <Navigate to="/" />} />

        {user && (
          <>
            <Route path="/movies" 
            element={<Home type="movie" />} 
            />
            <Route path="/series" 
            element={<Home type="series" />} 
            />

            <Route exact path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </BrowserRouter>

  )
}

export default App