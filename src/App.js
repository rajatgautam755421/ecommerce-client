import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import StudentFrom from "./Components/StudentForm/StudentFrom";
import Viewdetail from "./Components/ViewDetail/Viewdetail";
import Class from "./Components/Class/Class";
import Classes from "./Components/Class/Classes";
import Footer from "./Components/Footer/Footer";
import FooterHome from "./Components/Footer/FooterHome";
import IndividualDetail from "./Components/ViewDetail/IndividualDetail";
import IndividualDetailUpdate from "./Components/ViewDetail/IndividualDetailUpdate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/classes/:className"
          element={
            <>
              <Classes />
            </>
          }
        />

        <Route
          path="/class"
          element={
            <>
              <Class />
            </>
          }
        />

        <Route
          path="/data-entry"
          element={
            <>
              <StudentFrom />
            </>
          }
        />
        <Route
          path="/individual-detail/:id"
          element={
            <>
              <IndividualDetail />
            </>
          }
        />
        <Route
          path="/individual-detail-update/:id"
          element={
            <>
              <IndividualDetailUpdate />
            </>
          }
        />
        <Route
          path="/data-view"
          element={
            <>
              <Viewdetail />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
