const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
require("dotenv").config();
const User = require("../models/user");

/**
 * Reititykset kirjautumisen hallintaan
 * @module loginRouter
 * @category Controllers
 */

/**Kirjaa olemassa olevan käyttäjän järjestelmään. 
 * Etsii User kokoelmasta käyttäjän käyttäjänimen perusteella ja vertaa pyynnön mukana tullutta salasanaa ja tietokantaan tallennettua bcryptin compare funktiolla.
 * Tämän onnistuessa käyttäjälle allekirjoitetaan yksilöivä jwt token, joka palautetaan käyttäjän muiden tietojen lisäksi.
 * @name login post
 * @route {POST} /api/login
 */
loginRouter.post("/", async (request, response) => {
  const body = request.body;

  const user = await User.findOne({ username: body.username });
  const passwordCorrect =
    user === null
      ? false
      : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "Invalid username or password",
    });
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  response
    .status(200)
    .send({ token, username: user.username, name: user.name });
});

module.exports = loginRouter;
