import logo from "./logo.svg";
import "./App.css";
import ResponsiveDrawer from "./pages/dashboard";
import MiniDrawer from "./components/Sidebar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import PrimarySearchAppBar from "./components/Navbar";
import AppStore from "./hooks/AppStore";

function App() {
  const navcolor = AppStore((state) => state.navcolor);
  return (
    <>
      <BrowserRouter>
        <PrimarySearchAppBar navcolor={navcolor} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Users" element={<Users />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MiniDrawer /> */}
    </>
  );
}

export default App;
