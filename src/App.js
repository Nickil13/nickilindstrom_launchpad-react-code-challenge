import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, PostalLookup, Universities } from "./pages";

function App() {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/universities" element={<Universities />} />
                    <Route path="/postal-lookup" element={<PostalLookup />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
