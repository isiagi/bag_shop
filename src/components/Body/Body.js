import React from "react";
import "./Body.css";
import { Link } from "react-router-dom";
import Card from "./Bod";
import { productData } from "../API/EndPoints/AppData";
import "./card.css";

export default function Body() {
  return (
    <div
      style={{ backgroundColor: "rgb(236, 232, 232)", paddingBottom: "4rem" }}
    >
      <h3 className="h3__card">We have Got Your Style</h3>
      <div className="card-grid">
        {productData.map((product, index) => {
          return (
            <Link to={`/detail/${product.id}`} key={product.id}>
              <Card
                img={product.image}
                price={product.price}
                head={product.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
