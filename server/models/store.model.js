const mongoose = require("mongoose")

const StoreSchema = new mongoose.Schema({
    charging: [
        {
            
        }
    ],

    vehicleAccessories: [
        {

        }
    ],

    apparel: {
        men_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Men'
        },
        woman_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Woman'
        },
        kid_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Kid'
        }
    },

    lifestyle: {

    }

})

const Store = mongoose.model('Store', StoreSchema)
module.exports = Store