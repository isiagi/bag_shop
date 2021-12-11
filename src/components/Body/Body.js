import React from "react";
import hev from "../images/bag.jpg";
import o from "../images/1.jpg";
import k from "../images/2.jpg";
import a from "../images/3.jpg";
import "./Body.css";
import { Link } from "react-router-dom";
import Card from "./Bod";
import "./card.css";

export default function Body() {
  return (
    <div style={{ backgroundColor: "rgb(236, 232, 232)", paddingBottom: '4rem'}}>
      <h3 className="h3__card">We have Got Your Style</h3>
      <div className="card-grid">
        {[1, 2, 3,4,5,6].map((_, index) => {
          return (
            <Link to="/detail" key={index}>
              <Card img={k} price={"60,000"} head={"Designer Bag"} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
