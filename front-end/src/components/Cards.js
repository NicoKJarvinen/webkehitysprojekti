import React, { useState, useEffect } from "react";
import carService from "../services/cars";
import CardItem from "./CardItem";
import "./Cards.css";

/**
 * Kotisivulla olevan korttiosion komponentti
 *
 * @component
 */

function Cards() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService.getAll().then((cars) => setCars(cars));
  }, []);

  return (
    <div className="cards">
      <h1>Check out these discounts.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cars.slice(0, 1).map((car) => (
              <CardItem
                src={car.img}
                text={car.basicInfo}
                label={car.price + " €/day"}
                path="/renting"
              />
            ))}
            {cars.slice(1, 2).map((car) => (
              <CardItem
                src={car.img}
                text={car.basicInfo}
                label={car.price + " €/day"}
                path="/renting"
              />
            ))}
          </ul>
          <ul className="cards__items">
            {cars.slice(2, 3).map((car) => (
              <CardItem
                src={car.img}
                text={car.basicInfo}
                label={car.price + " €/day"}
                path="/renting"
              />
            ))}
            {cars.slice(3, 4).map((car) => (
              <CardItem
                src={car.img}
                text={car.basicInfo}
                label={car.price + " €/day"}
                path="/renting"
              />
            ))}
            {cars.slice(4, 5).map((car) => (
              <CardItem
                src={car.img}
                text={car.basicInfo}
                label={car.price + " €/day"}
                path="/renting"
              />
            ))}
            {cars.slice(5, 6).map((car) => (
              <CardItem
                src={car.img}
                text={car.basicInfo}
                label={car.price + " €/day"}
                path="/renting"
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
