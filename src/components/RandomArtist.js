import React, { useEffect, useState } from "react";

export default function RandomArtist() {
  const [artist, setArtist] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.title = artist.displayname + " - Art Museum";
  }, [artist]);

  async function fetchData() {
    const response = await fetch(
      "https://api.harvardartmuseums.org/person?q=roles.role:Artist&sort=random&fields=displayname,id,url&size=1&page=1&apikey=929885c9-4f01-4b51-ab44-041662619591"
    );
    const data = await response.json();
    const artData = data.records[0];
    setArtist(artData);
  }
  return (
    <div>
      <h1>{artist.displayname}</h1>
    </div>
  );
}
