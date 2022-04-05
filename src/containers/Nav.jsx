import React from "react";
import { Link } from "react-router-dom";
import navigation from "../navigation";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navigation.map((n, index) => (
          <div key={index}>
            <li className="nav__list-item">
              <Link to={`${n.slug}`}>
                {n.icon}
                {n.title}
              </Link>
            </li>
            <hr />
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
