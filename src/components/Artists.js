import React, { useEffect, useState } from "react";

export default function Artists() {
  const [artists, setArtists] = useState([]);
  async function getArtists() {
    const response = await fetch(
      "https://api.harvardartmuseums.org/person?q=roles.role:Artist&fields=displayname,id&size=100&page=1&apikey=929885c9-4f01-4b51-ab44-041662619591"
    );
    const data = await response.json();
    const artData = data.records;
    setArtists(artData);
  }

  useEffect(() => {
    document.title = "Search - Art Museum";
    getArtists();
  }, []);

  const artistDisplay = artists.map((artist, index) => {
    return <li key={index}>{artist.displayname}</li>;
  });
  return (
    <div>
      <ul>{artistDisplay}</ul>
    </div>
  );
}
