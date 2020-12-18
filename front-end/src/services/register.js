import axios from "axios";
const baseUrl = "api/users";
/**
 * Sisältää käyttäjän luomiseen käytettävän funktion.
 * @module registerService
 * @category Services
 */

/**
 * Lähettää luotavan käyttäjän datan palvelimelle.
 * @param {object} credentials käyttäjän tiedot.
 * @returns backendin vastaus.
 */
const register = async (credentials) => {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
};

export default {register};