//styling imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//React Router imports
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

//component imports
import NavBar from "./components/navbar";
import Footer from "./components/footer";

//page imports
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgotPassword";
import ForgotUsername from "./pages/forgotUsername";
import Profile from "./pages/profile";
import Favorites from "./pages/favorites";
import Map from "./pages/map";
import Distilleries from "./pages/distilleries";
import Distillery from "./pages/distillery";
import ErrorPage from "./pages/errorPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotpassword" element={<ForgotUsername />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/map" element={<Map />} />
        <Route path="/distilleries" element={<Distilleries />} />
        <Route path="/distilleries/:distilleryId" element={<Distillery />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
