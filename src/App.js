import { Fragment, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./Components/OtherContainers/About";
import { Profile } from "./Components/OtherContainers/Profile";
import { Login } from "./Components/AuthContainers/Login";
import { Signup } from "./Components/AuthContainers/Signup";
import { AuthContext } from "./context/context";
import { Welcome } from "./Components/OtherContainers/Welcome";
import { Home } from "./Components/OtherContainers/Home";
import { Contact } from "./Components/OtherContainers/Contact";
function App() {
  const { isLogin } = useContext(AuthContext);
  return (
    <Fragment>
      <Routes>
        {!isLogin && <Route path="login" element={<Login />} />}
        {!isLogin && <Route path="signup" element={<Signup />} />}
        {isLogin && (
          <Route path="/" element={<Welcome />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        )}
        <Route path="*" element={<Navigate to={isLogin ? "/" : "login"} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
