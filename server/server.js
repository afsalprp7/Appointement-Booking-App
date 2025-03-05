const express = require('express') ;
const {configDotenv} = require('dotenv');
const bookingRouter = require('./routes/bookingRoute');
const connectDatabaseMongo = require('./dbConfig/mongodbConfig');

//configure dotenv file
configDotenv();

//server port
const port  = process.env.PORT


const app = express();

//setting the view engine
app.set('view engine' , 'ejs') ;
app.set('view',__dirname+'/view');

//setting json format for request and responses
app.use(express.json());

//for parsing the request bodies
app.use(express.urlencoded({extended : true}));

//accesed router in the main file
app.use('/',bookingRouter);

// mongodb connecction + port
connectDatabaseMongo().then(()=>{
    app.listen(port,()=>{
        console.log(`server running ${port}`);
    })
})
