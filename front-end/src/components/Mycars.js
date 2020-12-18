import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CarService from "../services/cars";

/**
 * Käyttäjän tunnusten taakse piilotettu sivu, josta löytyy
 * käyttäjän sivulle tekemät ilmoitukset.
 *
 * @component
 */
function MyCars() {
  const username = useSelector((state) => state.user.username);
  const [cars, setCars] = useState([]);
  const [price, setPrice] = useState({});

  useEffect(() => {
    CarService.getAll()
      .then((cars) => cars.filter((car) => car.user[0].username === username))
      .then((c) => setCars(c));
  }, [username]);
  /**
   * Käsittelee painikkeen painalluksen ja lähettää päivitetyn hinnan api:in.
   * @param {string} id auton id jonka hinta päivitetään.
   */
  const handleSubmit = async (id) => {
    const target = id;
    const targetprice = price[target];
    const priceobject = {
      price: targetprice,
    };
    try {
      const result = await CarService.update(id, priceobject);
      const carList = cars.map((car) =>
        car.id === result.id
          ? {
              ...car,
              price: result.price,
            }
          : car
      );
      setCars(carList);
    } catch (e) {
      console.log(e);
    }
  };
  /**
   * Käsittelee input kentän muutokset ja asettaa muuttujan tilan kun muutos tapahtuu.
   * @param {event} event muutos.
   */
  const handlePriceChange = async (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setPrice({
      ...price,
      [name]: value,
    });
  };
  console.log(price);
  /**
   * Käsittelee delete painikkeen tapahtuman ja post requestaa backendiin pyynnön poistamiseen.
   * @param {string} id poistettavan auton id.
   */
  const handleDelete = async (id) => {
    try {
      const car = await CarService.deleteCar(id);
      const carList = cars.filter((car) => car.id !== id);
      setCars(carList);
    } catch (e) {
      console.log(e);
    }
  };

  if (cars.length === 0) {
    return <p>No cars listed!</p>;
  }

  return (
    <>
      <div class="carHeader">
        <h1>Your listings</h1>
      </div>
      <div className="carsContent">
        <div className="carsBox">
          {cars.map((car) => (
            <div className="carBoxContent" key={car.id}>
              <img src={car.img} alt="car" />
              <form>
                <div className="carsUpdate">
                  <label>Update price: </label>
                  <input
                    type="text"
                    name={car.id}
                    placeholder={car.price}
                    onChange={handlePriceChange}
                  />
                  <button
                    className="updateButton"
                    onClick={() => handleSubmit(car.id)}
                  >
                    Submit
                  </button>
                  <button
                    className="updateButton"
                    onClick={() => handleDelete(car.id)}
                  >
                    Delete listing
                  </button>
                </div>
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyCars;
