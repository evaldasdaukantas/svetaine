import React from "react";
import "./paslaugos.css";

function paslaugos() {
  const services = [
 
    "- Anniversaries;",
    "- Christenings;",
    "- Weddings;",
  ];

  return (
    <div>
      {services.map((pavadinimas) => (
        <p>{pavadinimas}</p>
      ))}
    </div>
  );
}

export default paslaugos;
