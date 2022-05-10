import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Universities } from "./pages";

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/universities" element={<Universities />} />
                </Routes>
            </main>
            <footer></footer>
        </Router>
    );
}

export default App;
