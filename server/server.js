const express = require('express') ;
const {configDotenv} = require('dotenv');
const bookingRouter = require('./routes/bookingRoute');
const connectDatabaseMongo = require('./dbConfig/mongodbConfig');
const path = require('path')

//configure dotenv file
configDotenv();

//server port
const port  = process.env.PORT


const app = express();

//setting the view engine
app.set('view engine' , 'ejs') ;
app.set("views", path.join(__dirname, "view"));

//setting json format for request and responses
app.use(express.json());

//for parsing the request bodies
app.use(express.urlencoded({extended : true}));

//set pubic folder as static files
app.use(express.static(path.join(__dirname,'public')));


//accesed router in the main file
app.use('/',bookingRouter);


// mongodb connecction + port
connectDatabaseMongo().then(()=>{
    app.listen(port,()=>{
        console.log(`server running ${port}`);
    })
})
