import React, { useState, useEffect } from "react";
import carService from "../services/cars";
import FileBase64 from "react-file-base64";

function Listing() {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [basicinfo, setBasicInfo] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [vechileType, setVechileType] = useState("");
  const [color, setColor] = useState("");
  const [fuelTypes, setFuelTypes] = useState("");
  const [tyreType, setTyreType] = useState("");
  const [trailerHitch, setTrailerHitch] = useState(false);
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [transmission, setTransmission] = useState("");
  const [mileage, setMileage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [cars, setCars] = useState([]);
  const [error, setError] = useState("");

  // tämä asynciksi...
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageFile) {
      console.log("kaatu");
      setError("Image file is needed");
      return;
    }

    if (imageFile) {
      const x = imageFile.base64.length;
      const last = imageFile.base64.charAt(x - 1);
      const secondlast = imageFile.base64.charAt(x - 2);
      let y = 0;
      if (last === "=" && secondlast === "=") {
        y = 2;
      } else if (last === 3) {
        y = 1;
      }
      const sizeinbytes = x * (3 / 4) - y;

      if (sizeinbytes > 300000) {
        console.log("imagefile size limit 300kt");
        return;
      }
    }

    const carObject = {
      img: imageFile.base64,
      location: location,
      price: price,
      basicInfo: basicinfo,
      carBrand: carBrand,
      technicalDetails: {
        vechileType: vechileType,
        color: color,
        fuelTypes: fuelTypes,
        tyreType: tyreType,
        trailerHitch: trailerHitch,
        seatingCapacity: seatingCapacity,
        transmission: transmission,
        mileage: mileage,
      },
    };
    try {
      const car = await carService.create(carObject);
      console.log(car);
    } catch (error) {
      // Error message
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
    console.log(carObject);
  };
  return (
    <>
      <div className="container">
        <div className="content-box">
          <div className="left"></div>
          <div className="right">
            <h1>Register your car for rent</h1>
            <p className="errorMessage">{error}</p>
            <form onSubmit={handleSubmit}>
              <label>Location</label>
              <input
                className="field"
                type="text"
                name="location"
                value={location}
                onChange={({ target }) => setLocation(target.value)}
              />
              <label>Price</label>
              <input
                className="field"
                type="text"
                name="price"
                value={price}
                onChange={({ target }) => setPrice(target.value)}
              />
              <label>Basic info</label>
              <input
                className="field"
                type="text"
                name="basicinfo"
                value={basicinfo}
                onChange={({ target }) => setBasicInfo(target.value)}
              />
              <label>Car brand</label>
              <input
                className="field"
                type="text"
                name="car brand"
                value={carBrand}
                onChange={({ target }) => setCarBrand(target.value)}
              />
              <label>Vehicle's type</label>
              <input
                className="field"
                type="text"
                name="vechiletype"
                value={vechileType}
                onChange={({ target }) => setVechileType(target.value)}
              />
              <label>Color of the car</label>
              <input
                className="field"
                type="text"
                name="color"
                value={color}
                onChange={({ target }) => setColor(target.value)}
              />
              <div className="checkbox">
                <label>Trailer hitch</label>
                <input
                  className="field"
                  type="checkbox"
                  name="trailer hitch"
                  value={trailerHitch}
                  onChange={() => setTrailerHitch(!trailerHitch)}
                />
              </div>
              <h3>Fuel type</h3>
              <div className="radio-group">
                <label>Diesel</label>
                <input
                  className="field"
                  type="radio"
                  name="fueltype"
                  value="diesel"
                  onChange={({ target }) => setFuelTypes(target.value)}
                />
                <label>Electricity</label>
                <input
                  className="field"
                  type="radio"
                  name="fueltype"
                  value="electric"
                  onChange={({ target }) => setFuelTypes(target.value)}
                />
                <label>Gasoline</label>
                <input
                  className="field"
                  type="radio"
                  name="fueltype"
                  value="gasoline"
                  onChange={({ target }) => setFuelTypes(target.value)}
                />
              </div>
              <h3>Tyre type</h3>
              <div class="radio-group">
                <label>Winter tyres</label>
                <input
                  className="field"
                  type="radio"
                  name="tyretype"
                  value="winter"
                  onChange={({ target }) => setTyreType(target.value)}
                />
                <label>Summer tyres</label>
                <input
                  className="field"
                  type="radio"
                  name="tyretype"
                  value="summer"
                  onChange={({ target }) => setTyreType(target.value)}
                />
              </div>

              <input
                className="field"
                type="text"
                name="seating capacity"
                placeholder="Seating capacity"
                value={seatingCapacity}
                onChange={({ target }) => setSeatingCapacity(target.value)}
              />
              <h3>Transmission</h3>
              <div class="radio-group">
                <label>Manual</label>
                <input
                  className="field"
                  type="radio"
                  name="transmission"
                  value="manual"
                  onChange={({ target }) => setTransmission(target.value)}
                />
                <label>Automatic</label>
                <input
                  className="field"
                  type="radio"
                  name="transmission"
                  value="automatic"
                  onChange={({ target }) => setTransmission(target.value)}
                />
              </div>

              <input
                className="field"
                type="text"
                name="mileage"
                placeholder="Miles driven"
                value={mileage}
                onChange={({ target }) => setMileage(target.value)}
              />
              <div className="imageInput">
                <label>Choose image</label>
                <FileBase64
                  multiple={false}
                  onDone={(x) => {
                    setImageFile(x);
                  }}
                />
              </div>
              <button className="listButton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
