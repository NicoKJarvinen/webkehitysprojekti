import axios from "axios";
const baseUrl = "api/login";
/**
 * Sisältää kirjautumiseen käytettävän funktion.
 * @module loginService
 * @category Services
 */

/**
 * Lähettää käyttäjän salasanan ja käyttäjänimen backendille.
 * @param {object} credentials käyttäjänimi ja salasana
 * @returns backendin vastaus.
 */
const login = async (credentials) => {
  const response = await axios.post(
    "https://recar-rental.herokuapp.com/" + baseUrl,
    credentials
  );
  return response.data;
};

export default { login };
