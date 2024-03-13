//import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
//import UserTree from "./OrgTree";
import PageLayout from "./pages/pageLayout";
//import employees from "./data";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/user/:username" element={<PageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
