import "./App.css";
import { Navbar } from "./components/navbar";
import { Searcher } from "./components/searcher";
import { Info } from "./components/info";
import { RecipeSearch } from "./components/recipeSearch";
import { InputSearcher } from "./components/InputSearcher";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Searcher />} />
        <Route path="/info" element={<Info />} />
        <Route path="/input-searcher" element={<InputSearcher />} />
        <Route path="/recipe-search" element={<RecipeSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
