const express       = require('express');
const keys          = require('./config/keys');
const path          = require('path');


const app   = express();
const PORT  = process.env.PORT || 9000;


app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'dist')));


require('./routes/apiRoutes')(app);


app.listen(PORT, ()=>{
    console.log("Backend Server Running at localhost: " + PORT); 
});