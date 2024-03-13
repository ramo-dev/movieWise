import Movies from "./routes/Movies"
import Login from "./routes/Login"
import Register from "./routes/Register"
import Home from "./routes/Home"
import NotFound from "./routes/NotFound"
import {BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./routes/About"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/Movies" Component={Movies} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
