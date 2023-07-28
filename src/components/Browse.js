import React, { useState, useEffect } from "react";

export default function Browse() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch(
      "https://api.harvardartmuseums.org/object?size=20&page=1&apikey=929885c9-4f01-4b51-ab44-041662619591"
    );
    const data = await response.json();
    const artData = data.records;
    setWorks(artData);
  }

  const workDisplay = works.map((work, index) => {
    return (
      <li key={index}>
        <img src={work.primaryimageurl} alt="work" />
        <h2>{work.title}</h2>
        <h3>{work.people[0].name}</h3>
        <h4>{work.dated}</h4>
      </li>
    );
  });
  return (
    <div>
      <ul>{workDisplay}</ul>
    </div>
  );
}
