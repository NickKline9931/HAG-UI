import Users from "./components/Users";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Search from "./components/Search";
import Artists from "./components/Artists";
import RandomArtist from "./components/RandomArtist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="browse/:page" element={<Browse />} />
          <Route path="search" element={<Search />} />
          <Route path="artists" element={<Artists />} />
          <Route path="randomartist" element={<RandomArtist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
