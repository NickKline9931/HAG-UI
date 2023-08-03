import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ArtistPage.css";

export default function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});
  const [works, setWorks] = useState([]);

  useEffect(() => {
    getArtist();
  }, []);

  useEffect(() => {
    document.title = artist.displayname + " - Art Museum";
    getWorks();
  }, [artist]);

  async function getArtist() {
    if (id == null || id == undefined) {
      const response = await fetch(
        "https://api.harvardartmuseums.org/person?q=roles.role:Artist&size=1&page=1&sort=random&fields=displayname,id,url&apikey=929885c9-4f01-4b51-ab44-041662619591"
      );
      const data = await response.json();
      const artData = data.records[0];
      setArtist(artData);
    } else {
      const response = await fetch(
        "https://api.harvardartmuseums.org/person/" +
          id +
          "?fields=displayname,id,url&apikey=929885c9-4f01-4b51-ab44-041662619591"
      );
      const data = await response.json();
      setArtist(data);
    }
  }

  async function getWorks() {
    const response = await fetch(
      "https://api.harvardartmuseums.org/object?person=" +
        id +
        "&size=20&page=1&fields=title,dated,primaryimageurl,baseimageurl,id,url&apikey=929885c9-4f01-4b51-ab44-041662619591"
    );
    const data = await response.json();
    const artData = data.records;
    setWorks(artData);
  }

  const workDisplay = works.map((work, index) => {
    return (
      <li>
        <a href={work.url} target="_blank" rel="noopener noreferrer">
          <img
            src={work.primaryimageurl + "?height=150&width=150"}
            className="workImg"
            style={{ backgroundImage: "url(" + work.baseimageurl + ")" }}
            alt="work"
          />
        </a>
        <h2>{work.title}</h2>
        <h4>{work.dated}</h4>
      </li>
    );
  });

  return (
    <div>
      <main>
        <a href={artist.url} target="_blank" rel="noopener noreferrer">
          <h1>{artist.displayname}</h1>
        </a>
        <div>
          <ul>{workDisplay}</ul>
        </div>
      </main>
    </div>
  );
}
