import React, { useState, useEffect, Fragment } from "react";
import Modal from "react-modal";
import carService from "../services/cars";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import CardItem from "./CardItem";
import "./Renting.css";
/**
 * Komponentti vuokraussivustolle.
 * @component
 */
function Renting() {
  const [cars, setCars] = useState([]);
  const [clickedCar, setClickedCar] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const userstate = useSelector((state) => state.user);
  let logged = userstate.logged;

  useEffect(() => {
    carService.getAll().then((cars) => setCars(cars));
  }, []);

  /**
   * Käsittelee tapahtuman kun ilmoitusta klikataan, näyttää ilmoituksen kaikki tiedot.
   * @param {string} id klikatun ilmoituksen id. 
   */
  const showDetails = async (id) => {
    try {
      const car = await carService.getOne(id);
      setClickedCar(car);
      setModalIsOpen(true);
    } catch (e) {
      console.log(e);
    }
  };

  const authLinks = (
    <Fragment>
      <Link to="/Mycars">
        <button className="carsButton">View your listings</button>
      </Link>
    </Fragment>
  );

  if (cars.length === 0) {
    return null;
  }
  /**
   * Komponentti jossa auton kaikki tiedot.
   * @component
   */
  function modalOpen() {
    if (clickedCar != null) {
      return (
        <>
          <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <p className="closeModal" onClick={() => setModalIsOpen(false)}>
              <i className="fas fa-times" />
            </p>
            <div class="leftSide">
              <h3>{clickedCar.carBrand}</h3>
              <img src={clickedCar.img} alt="" />
              <p>Listed by: {clickedCar.user[0].username}</p>
            </div>
            <div class="rightSide">
              <ul>
                <li>Price: {clickedCar.price}€/day</li>
                <li>Location: {clickedCar.location}</li>
                <li>Basic info: {clickedCar.basicInfo}</li>
                <li>Color: {clickedCar.technicalDetails.color}</li>
                <li>Fuel type: {clickedCar.technicalDetails.fuelTypes}</li>
                <li>Tyre type: {clickedCar.technicalDetails.tyreType}</li>
                <li>
                  Trailer hitch:
                  {clickedCar.technicalDetails.trailerHitch ? " Yes" : " No"}
                </li>
                <li>
                  Seating capacity:
                  {clickedCar.technicalDetails.seatingCapacity}
                </li>
                <li>
                  Transmission: {clickedCar.technicalDetails.transmission}
                </li>
                <li>Mileage: {clickedCar.technicalDetails.mileage}</li>
              </ul>
            </div>
          </Modal>
        </>
      );
    }
  }
  return (
    <>
      <div className="cars__heading">
        <h2>Cars available</h2>
        {logged ? authLinks : null}
      </div>
      <div className="cars__container">
        <div className="cars__wrapper">
          <ul className="car__items">
            {cars.map((car) => (
              <CardItem
                src={car.img}
                onClick={(e) => showDetails(car.id)}
                text={car.basicInfo}
                label={car.price + " €/day"}
              />
            ))}
            {modalOpen()}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Renting;
