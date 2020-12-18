const initialState = {
    name: null,
    username: null,
    //email: null,
    //phone: null
    logged: false
}
/**
* Käyttäjän redux tilanhallinta komponentti.
*@module userReducer
*@category reducers
*/

/**
 * Käyttäjän redux tila.
 * @param {object} state alkutila. 
 * @param {action} action tilaa muuttava action.
 */
const userReducer = (state = initialState, action ) => {
switch(action.type) {
    case "LOGIN":
    return {
        name: action.data.name,
        username: action.data.username,
        logged: true
    };
    case "LOGOUT": 
    return {
        name: action.data.name,
        username: action.data.username,
        logged: false
    }
    default:
        return state;
}
}
/**
 * Kirjautumis action.
 * @param {object} stuff actionin mukana tuleva data. 
 */
export const userLogin = (stuff) => {
    return {
        type: "LOGIN",
        data: {
            name: stuff.name,
            username: stuff.username,
            //email: stuff.email,
            //phone: stuff.phone
        }
    } 
}

/**
* Uloskirjautumis action.
*/
export const userLogout = () => {
    return {
        type: "LOGOUT",
        data: {
            name: null,
            username: null
        }
    }
}

export default userReducer;