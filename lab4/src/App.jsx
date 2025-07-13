import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./features/Home/Home.jsx";
import Details from "./features/Details/Details.jsx";

function App() {
  return (
    <BrowserRouter basename={"/reactlabs/lab4/dist/"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movieId" element={<Details />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
