import React, { useState, useEffect } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function changeQuery(e) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    document.title = "Search - Art Museum";
  }, []);

  async function enterSearch() {
    const response = await fetch(
      "https://api.harvardartmuseums.org/object?size=20&page=1&q=" +
        query +
        "&apikey=929885c9-4f01-4b51-ab44-041662619591"
    );
    const data = await response.json();
    const artData = data.records;
    setResults(artData);
  }

  const resultsDisplay = results.map((res, index) => {
    return res.peoplecount > 0 ? (
      <li key={index}>
        <a href={res.url} target="_blank" rel="noopener noreferrer">
          <img src={res.primaryimageurl} alt="work" />
          <h2>{res.title}</h2>
          <h3>{res.people[0].name}</h3>
          <h4>{res.dated}</h4>
        </a>
      </li>
    ) : (
      <li key={index}>
        <a href={res.url} target="_blank" rel="noopener noreferrer">
          <img src={res.primaryimageurl} alt="work" />
          <h2>{res.title}</h2>
          <h4>{res.dated}</h4>
        </a>
      </li>
    );
  });
  return (
    <div>
      <form>
        <input type="text" value={query} onChange={changeQuery}></input>
        <button type="button" onClick={enterSearch}>
          Submit
        </button>
      </form>
      <ul>{resultsDisplay}</ul>
    </div>
  );
}
