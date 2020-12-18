const carsRouter = require("express").Router();
const jwt = require("jsonwebtoken");
const Car = require("../models/car");
const User = require("../models/user");
/**
 * Reititykset autoille. 
 * @module carsRouter
 * @category Controllers
 */


/**
 * Hakee kokoelmasta kaikki autot.
 * Palauttaa auton tiedot sekä auton lisänneen käyttäjän nimen & käyttäjänimen.
 * @name Cars get
 * @route {GET} /api/cars
 */

carsRouter.get("/", async (request, response) => {
  const cars = await Car.find({}).populate("user", { username: 1, name: 1 });
  response.json(cars.map((car) => car.toJSON()));
});
/** Hakee kokoelmasta yksilöidyn auton id:n perusteella.
 * @name Car get
 * @route {GET} /api/cars/:id
 */
carsRouter.get("/:id", async (request, response) => {
  const car = await Car.findById(request.params.id).populate("user", { username: 1 })
  if(car) {
    response.json(car.toJSON());
  } else {
    response.status(404).end();
  }
});
/** Poistaa kokoelmasta yksilöidyn auton id:n perusteella.
 * @name Car delete
 * @route {DELETE} /api/cars/:id
 */
carsRouter.delete("/:id", async (request, response) => {
  await Car.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

/** Lisää kokoelmaan auton pyynnön mukana tulevan datan perusteella.
 * Pyynnön mukana oltava käyttäjän identifioiva jwt token.
 * Tallentaa myös käyttäjän kokoelmaan tiedon lisätystä autosta.
 * Mukana validointia.
 * Palauttaa luodun auton.
 * @name Car post
 * @route {POST} /api/cars
 */
carsRouter.post("/", async (request, response) => {
  const body = request.body;
  const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid " });
  }
  const user = await User.findById(decodedToken.id);

  if(body.img.length === 0) {
    return response.status(400).json({ error: "car image required" });
  }

  if(body.location.length === 0) {
    return response.status(400).json({ error: "car location required" });
  }

  if(body.price.length === 0) {
    return response.status(400).json({ error: "price required" });
  }

  if(body.carBrand.length === 0) {
    return response.status(400).json({ error: "car brand required" });
  }

  if(body.basicInfo.length === 0) {
    return response.status(400).json({ error: "basic info required" });
  }

  if(body.technicalDetails.vechileType.length === 0) {
    return response.status(400).json({ error: "vechile type required" });
  }
  
  if(body.technicalDetails.color.length === 0) {
    return response.status(400).json({ error: "color required" });
  }

  if(body.technicalDetails.fuelTypes.length === 0) {
    return response.status(400).json({ error: "fuel type required" });
  }

  if(body.technicalDetails.tyreType.length === 0) {
    return response.status(400).json({ error: "tyre type required" });
  }

  if(body.technicalDetails.trailerHitch === undefined) {
    return response.status(400).json({ error: "trailer hitch required" });
  }

  if(body.technicalDetails.seatingCapacity.length === 0) {
    return response.status(400).json({ error: "seating capacity required" });
  }

  if(body.technicalDetails.transmission.length === 0) {
    return response.status(400).json({ error: "transmission required" });
  }

  if(body.technicalDetails.mileage.length === 0) {
    return response.status(400).json({ error: "mileage required" });
  }
  
  const car = new Car({
    img: body.img,
    date: new Date(),
    location: body.location,
    price: body.price,
    carBrand: body.carBrand,
    basicInfo: body.basicInfo,
    technicalDetails: {
    vechileType: body.technicalDetails.vechileType,
    color: body.technicalDetails.color,
    fuelTypes: body.technicalDetails.fuelTypes,
    tyreType: body.technicalDetails.tyreType,
    trailerHitch: body.technicalDetails.trailerHitch,
    seatingCapacity: body.technicalDetails.seatingCapacity,
    transmission: body.technicalDetails.transmission,
    mileage: body.technicalDetails.mileage
    },
    user: user._id,
  });

  const savedCar = await car.save();
  user.cars = user.cars.concat(savedCar._id);
  await user.save();
  response.status(201).json(savedCar.toJSON());
});
/**Korvaa yksilöidyn auton hinnan pyynnön mukana tulevalla datalla.
 * @name Car put
 * @route {PUT} /api/cars/:id
 */
carsRouter.put("/:id", async (request, response) => {
  const body = request.body;
  
  const updatedCar = await Car.findByIdAndUpdate(request.params.id, {price: body.price}, {new: true, context: "query"});
  if(updatedCar) {
    response.json(updatedCar.toJSON());
  } else {
    response.status(404).end();
  }
});

module.exports = carsRouter;
