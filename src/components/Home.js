import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - Art Museum";
  }, []);

  return (
    <div>
      <h1>Harvard Art Museum</h1>
    </div>
  );
}
