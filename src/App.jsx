import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Searcher } from "./components/searcher";
import { Info } from "./components/info";
import { RecipeSearch } from "./components/recipeSearch";
import { InputSearcher } from "./components/InputSearcher";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Searcher />
                                  <InputSearcher />
                                 
                                  </>} />
        <Route path="/info" element={<Info />} />
        <Route path="/input-searcher" element={<InputSearcher />} />
        <Route path="/recipe-search" element={<RecipeSearch />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
