import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Browse.css";

export default function Browse() {
  const navigate = useNavigate();
  const { page } = useParams();
  const [works, setWorks] = useState([]);
  useEffect(() => {
    document.title = "Browse - Art Museum";
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://api.harvardartmuseums.org/object?fields=title,peoplecount,people,url,primaryimageurl,baseimageurl,dated&size=20&" +
        page +
        "&apikey=929885c9-4f01-4b51-ab44-041662619591"
    );
    const data = await response.json();
    const artData = data.records;
    setWorks(artData);
  }

  const workDisplay = works.map((work, index) => {
    return work.peoplecount > 0 ? (
      <li key={index}>
        <a href={work.url} target="_blank" rel="noopener noreferrer">
          <img
            src={work.primaryimageurl + "?height=150&width=150"}
            className="workImg"
            style={{ backgroundImage: "url(" + work.baseimageurl + ")" }}
            alt="work"
          />
        </a>
        <h2>{work.title}</h2>
        <h3
          onClick={() => {
            navigate("/artist/" + work.people[0].personid);
          }}
        >
          {work.people[0].displayname}
        </h3>
        <h4>{work.dated}</h4>
      </li>
    ) : (
      <li key={index}>
        <a href={work.url} target="_blank" rel="noopener noreferrer">
          <img
            src={work.primaryimageurl}
            className="browseImg"
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
      <ul>{workDisplay}</ul>
    </div>
  );
}
