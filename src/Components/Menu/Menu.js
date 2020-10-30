import React from "react";
import "./Menu.scss";

export default function Menu() {
  return (
    <div className="menuContainer">
      <div className="menu-header">
        <div className="menu-userImg">
          <img className="menu-Img" src="/img/profile.png" alt="" />
        </div>
        sign In
      </div>
      <ul>
        <li>Profile</li>
        <li>Credit</li>
        <li>Discounts</li>
        <li>Support</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
