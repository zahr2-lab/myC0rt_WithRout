import React from "react";
import "./MainPage.scss";
import { Link } from "react-router-dom";

const pages = [
  { name: "Fruits" },
  { name: "Vegetables" },
  { name: "Proteins" },
  { name: "Beans" }
];

export default function MainPage() {
  return (
    <div className="mainPage">
      {pages.map((page, index) => (
        <Link key={index} to={`/Page/${page.name}`}>
          <div className="mainPage-Item">
            <img
              className="mainPage-Img"
              src={`/img/${page.name}.png`}
              alt=""
            />
            <div className="pagesTitle">{page.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
