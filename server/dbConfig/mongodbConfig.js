const mongoose = require('mongoose');


async function connectDatabaseMongo(){
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Database connected successfully')
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDatabaseMongo