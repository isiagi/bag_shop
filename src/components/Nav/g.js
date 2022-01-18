import React from "react";
import { Link } from "react-router-dom";
import {DropDown, Drop} from "./DropDown";
import { data } from "./data";
import "./g.css";
const g = () => {
  const [drop, setDrop] = React.useState(false);
  const [dro, setDro] = React.useState(false);
  return (
    <div className="g__wrapper">
      <ul className="lo">
        {data.map((item) => {
            if (item.title === "Bags") {
            return (
              <li
                key={item.id}
                onMouseEnter={() => setDrop(true)}
                onMouseLeave={() => setDrop(false)}
                className="nav__i"
              >
                <Link>
                  {item.title}
                  {drop && <DropDown />}
                </Link>
              </li>
            );
          }

          if (item.title === "Shoes") {
            return (
              <li
                key={item.id}
                onMouseEnter={() => setDro(true)}
                onMouseLeave={() => setDro(false)}
              >
                <Link>
                  {item.title}
                  {dro && <Drop />}
                </Link>
              </li>
            );
          }
          
          return (
            <li key={item.id}>
              <Link>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default g;
