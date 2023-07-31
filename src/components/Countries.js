import React, { useEffect, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    document.title = "Countries - Art Museum";
    getCountries();
  }, []);

  async function getCountries() {
    const response = await fetch(
      "https://api.harvardartmuseums.org/place?size=75&page=1&level=2&fields=name,id&apikey=929885c9-4f01-4b51-ab44-041662619591"
    );
    const data = await response.json();
    const artData = data.records;
    setCountries(artData);
  }
  const countryDisplay = countries.map((place, index) => {
    return <li key={index}>{place.name}</li>;
  });
  return (
    <div>
      <ul>{countryDisplay}</ul>
    </div>
  );
}
