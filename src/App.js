import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Index";
import About from "./pages/About/Index";
import Header from "./layout/Header/index";
import Models from "./pages/Models/index";
import Testimonials from "./pages/Testimonials/index";
import Team from "./pages/Team/index";
import Contact from "./pages/Contact/index";
import Footer from "./layout/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vehiclemodels" element={<Models />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/ourteam" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
