import Users from "./components/Users";
import Home from "./components/Home";
import Browse from "./components/Browse";
import Search from "./components/Search";
import Artists from "./components/Artists";
import ArtistPage from "./components/ArtistPage";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import savedWorkService from "./service/SavedWorkService";

function App() {
  function saveWork(work) {
    const savedWork = {
      id: work.id,
      title: work.title,
      primaryImageUrl: work.primaryimageurl,
      baseImageUrl: work.baseimageurl,
      dated: work.dated,
      artist: work.people[0],
      artistId: work.people[0].personid,
    };
    savedWorkService.SaveWork(savedWork).then((response) => {
      alert("Saved");
    });
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="browse" element={<Browse saveWork={saveWork} />} />
          <Route
            path="search/:q?/:page?"
            element={<Search saveWork={saveWork} />}
          />
          <Route path="artists" element={<Artists />} />
          <Route
            path="artist/:id?/:page"
            element={<ArtistPage saveWork={saveWork} />}
          />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
