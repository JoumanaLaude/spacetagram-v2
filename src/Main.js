import Home from "./Home";
import Explore from "./components/Explore";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

export default function Main() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="explore" element={<Explore />} />
                <Route exact path="explore/#starred" element={<Explore />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
        </div>
    );
}
