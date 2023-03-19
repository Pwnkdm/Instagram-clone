import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Componants/Header/Header";
import Login from "./Componants/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/User";
import Home from "./Componants/Home/Home";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.User);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <Router>
      {isAuthenticated && <Header />}

      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Login />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
