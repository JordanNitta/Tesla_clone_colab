require('dotenv').config()
const mongoose = require('mongoose')
const menApparelData = require('./data/men.js')
const MenApparel = require('./models/men.model')
const StoreApparel = require('./models/store.model')
const uri = process.env.MONGO_DB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => {
        console.log('Established a connection to the database');
        importMenApparel()
    })
    .catch(err => console.log('Something went wrong when connecting to the database', err));

const importMenApparel = async () => {
    try {
        await MenApparel.deleteMany(); // Will delete the existing records before we insert
        
        await MenApparel.insertMany(menApparelData) // Inserting men's apparel data from "menApparelData"
        console.log('Men\'s Apparel data seeded successfully')
    } catch (error) {
        console.error('Error seeding Men\'s Apparel data:', error)
    }
};


