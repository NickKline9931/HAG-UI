import React, { useEffect } from "react";

export default function Artists() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  useEffect(() => {
    document.title = "Search - Art Museum";
  }, []);

  const alphabetDisplay = alphabet.map((letter, index) => {
    return (
      <button type="button" key={index} value={letter}>
        {letter}
      </button>
    );
  });
  return <div>{alphabetDisplay}</div>;
}
