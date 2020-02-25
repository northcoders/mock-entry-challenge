import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  const scroll = () => window.scrollTo(0, 0);
  return (
    <nav>
      <Link to="/">
        <button onClick={scroll}>
          <p>Home</p>
        </button>
      </Link>
      <Link to="/isLongWord">
        <button onClick={scroll}>
          <p>Challenge 1</p>
        </button>
      </Link>
      <Link to="/multiply">
        <button onClick={scroll}>
          <p>Challenge 2</p>
        </button>
      </Link>
      <Link to="/finished">
        <button onClick={scroll}>
          <p>Finished</p>
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
