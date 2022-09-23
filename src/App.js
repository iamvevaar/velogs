import Navbar from "./components/navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
   const user = true; 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
        <Route path="/login" element={user ? <Home/> : <Login />} />
        <Route path="/write" element={user ? <Write/> : <Register />} />
        <Route path="/settings" element={user ? <Settings/> : <Register />} />
      </Routes>

    </>
  );
}

export default App;
