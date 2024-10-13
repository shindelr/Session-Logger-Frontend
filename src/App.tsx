import { Routes, Route } from "react-router-dom";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Components/Pages
import Header from "./components/Header";
import LogNewSession from "./pages/LogNewSession";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import CreateAccountPage from "./pages/CreateAccount";
import LogInPage from "./pages/LogIn";
import NoMatchingRoute from "./pages/NoMatchingRoute";

function App() {
  return (
    <>
      <Header>Session Logger</Header>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/log-new-session" element={<LogNewSession />} />
        <Route path="/CreateAccount" element={<CreateAccountPage />} />
        <Route path="/LogIn" element={<LogInPage />} />
        <Route path="*" element={<NoMatchingRoute />} />
      </Routes>
    </>
  );
}

export default App;
