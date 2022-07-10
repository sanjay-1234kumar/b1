require('dotenv').config();

const express = require('express');

const path = require('path');

const Razorpay = require("razorpay");

const crypto = require('crypto');

const app = express();

global.appRoot = path.resolve(__dirname);

const cors = require('cors');

const cookieParser = require('cookie-parser');


const router = require('./routes');

const mangerRou = require('./manger-routes');
const DbConnect = require('./database.js');


const port = process.env.PORT || 5500;// try to convert string into number

app.use(cookieParser());

app.use('/shopIm', express.static('shopIm'));// static floder shopimage
app.use('/caterIm', express.static('caterIm'));// static floder catergory sub catergory
app.use('/prIm', express.static('prIm'));// static floder  for product
app.use('/rtIm', express.static('rtIm'));// static floder  retuns 
app.use('/mangerIm', express.static('mangerIm'));// static floder  retuns 
app.use('/billIm', express.static('billIm'));// static floder  retuns 
app.use('/auditIm', express.static('auditIm'));// static floder  retuns 
app.use('/workIm', express.static('workIm'));
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000'],
    credentials: true,
}));




app.use(express.json());

app.use(express.urlencoded({ extended: false }));


app.use(router);// for seller 



app.use(mangerRou);// manger 

DbConnect();



app.get('/', (req, res, next) => {



    return res.sendFile(__dirname + '/index.html');


});








app.use((err, req, res, next) => {



    //err.status=400 bad request err.status=401 unauthorised access 
    //err.status=403 forrbbiend err.status=404 not found 
    // err.status=500 internal server error 501=not implented
    // 502=bad gateway 503 service is unaviable 

    //console.log(err);

    let { status, message } = err;

    if (!status) {
        status = 500;
    }

    if (!message) {
        message = "Internal sever error"
    }

    return res.status(status).json({ message });
});




app.listen(port, () => {
    console.log(`sever is listening at port ${port}`);

});
