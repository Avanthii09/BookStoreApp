
import React, { useState } from "react";
import { FaTachometerAlt, FaHeart, FaThList } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarItems = [
    { label: "Dashboard", icon: <FaTachometerAlt /> },
    { label: "Wishlist", icon: <FaHeart /> },
    { label: "Categories", icon: <FaThList /> },
  ];

  return (
    <nav className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="toggleButton" onClick={toggleSidebar}>
        <span className={`toggleLine ${isOpen ? "open" : ""}`}></span>
        <span className={`toggleLine ${isOpen ? "open" : ""}`}></span>
        <span className={`toggleLine ${isOpen ? "open" : ""}`}></span>
      </div>
      <ul className="sidebar__list">
        {sidebarItems.map((item, index) => (
          <li className="sidebar__item" key={index}>
            {item.icon}
            <span className={`sidebar__text ${isOpen ? "open" : ""}`}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
