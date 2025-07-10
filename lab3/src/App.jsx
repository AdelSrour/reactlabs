import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movieId" element={<Details />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
