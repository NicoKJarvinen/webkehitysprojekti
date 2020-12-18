import axios from "axios";
const base = "/api/cars";
/**
 * Sisältää funktiot, joita käytetään backendin kanssa keskustelemiseen.
 * @module carService
 * @category Services
 */

let token = null;
/**
 * Kirjautuessa token talletetaan muuttujaan tällä funktiolla.
 * @param {string} newToken talletettava token.
 */
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};
/**
 * GET pyyntö /api/cars. Hakee kaikki autot kokoelmasta.
 * @returns {Array} backendin vastaus.
 */
const getAll = () => {
  const request = axios.get("https://recar-rental.herokuapp.com/" + base);
  return request.then((response) => response.data);
};
/**
 * POST pyyntö /api/cars , luo uuden autoresurssin.
 * Asettaa pyynnön headeriin käyttäjän jwt tokenin.
 * @param {object} newObject lisättävän auton data.
 * @returns backendin vastaus.
 */
const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(base, newObject, config);
  return response.data;
};
/**
 * Hakee tietokannasta yksilöidyn auton id:n perusteella.
 * @param {string} id haettavan auton id.
 * @returns backendin vastaus.
 */
const getOne = async (id) => {
  const response = await axios.get(
    "https://recar-rental.herokuapp.com/" + base + `/${id}`
  );
  return response.data;
};
/**
 * Poistaa yksilöidyn auton id:n perusteella.
 * @param {string} id poistettavan auton id.
 * @returns backendin vastaus.
 */
const deleteCar = async (id) => {
  const response = await axios.delete(
    "https://recar-rental.herokuapp.com/" + base + `/${id}`
  );
  return response.data;
};
/**
 * Päivittää yksilöidyn auton hinnan id:n perusteella.
 * @param {string} id päivitettävän auton id.
 * @param {string} price auton uusi hinta
 * @returns backendin vastaus.
 */
const update = async (id, price) => {
  const response = await axios.put(
    "https://recar-rental.herokuapp.com/" + base + `/${id}`,
    price
  );
  return response.data;
};

export default { getAll, create, setToken, getOne, deleteCar, update };
