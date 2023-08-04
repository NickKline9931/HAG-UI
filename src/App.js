import Users from "./components/Users";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Search from "./components/Search";
import Artists from "./components/Artists";
import ArtistPage from "./components/ArtistPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="browse" element={<Browse />} />
          <Route path="search/:q?/:page?" element={<Search />} />
          <Route path="artists" element={<Artists />} />
          <Route path="artist/:id?/:page" element={<ArtistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
