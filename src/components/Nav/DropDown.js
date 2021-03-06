import React, {useState} from "react";
import { serviceDropdown, shoes} from "./navItems";
import { Link } from "react-router-dom";
import "./DropDown.css";

const DropDown = () => {
    const[drop, setDrop] = useState(false)
  return (
    <React.Fragment>
      <ul className={drop ? "services-submenu clicked": "services-submenu"} onClick={() => setDrop(!drop)}>
        {serviceDropdown.map((item) => (
          <li key={item.id}>
            <Link to={item.path} className={item.cName}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const Drop = () => {
  const[drop, setDrop] = useState(false)
return (
  <React.Fragment>
    <ul className={drop ? "services-submenu clicked": "services-submenu"} onClick={() => setDrop(!drop)}>
      {shoes.map((item) => (
        <li key={item.id}>
          <Link to={item.path} className={item.cName}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
);
};

export {
  DropDown, Drop
}
