import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState({});

  useEffect(() => {
    getArtist();
  }, []);

  useEffect(() => {
    document.title = artist.displayname + " - Art Museum";
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
        "https://api.harvardartmuseums.org/person?q=id:" +
          id +
          "&fields=displayname,id,url&apikey=929885c9-4f01-4b51-ab44-041662619591"
      );
      const data = await response.json();
      const artData = data.records[0];
      setArtist(artData);
    }
  }
  return (
    <div>
      <a href={artist.url} target="_blank" rel="noopener noreferrer">
        <h1>{artist.displayname}</h1>
      </a>
    </div>
  );
}
