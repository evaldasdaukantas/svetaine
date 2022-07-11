import React from "react";
import "./paslaugos.css";

function paslaugos() {
  const extraServices = [
    "- Plate and glass rental;",
    "- Table decor;",
    "- Allergy-friendly menus;",
    "- Dessert table;",
  ];

  return (
    <div>
      {extraServices.map((pavadinimas) => (
        <p>{pavadinimas}</p>
      ))}
    </div>
  );
}

export default paslaugos;
