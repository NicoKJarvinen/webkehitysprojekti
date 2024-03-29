const mongoose = require('mongoose')
/**
 * Määrittelee auton skeeman.
 * @module carmodel
 * @category Models
 */

/**
 * Schema autolle.
 */
const carSchema = mongoose.Schema({
    img: { type: String },
    date: { type: String },
    location: { type: String },
    price: { type: Number },
    basicInfo: { type: String},
    carBrand: { type: String},
    technicalDetails: {
        vechileType: { type: String },
        color: { type: String },
        fuelTypes: { type: String},
        tyreType: { type: String},
        trailerHitch: { type: Boolean },
        seatingCapacity: { type: Number},
        transmission: { type: String},
        mileage: { type: Number}
    },
    user: [ { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ],
})
/**
 * Scheman JSON muodon muokkaus.
 */
carSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Car', carSchema)