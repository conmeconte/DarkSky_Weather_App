const express       = require('express');
const keys          = require('./config/keys');
const path          = require('path');
const DarkSky = require('dark-sky')
const darksky = new DarkSky(keys.API_KEY); 

const app   = express();
const PORT  = process.env.PORT || 9000;


app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'dist')));


require('./routes/apiRoutes')(app, darksky);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


app.listen(PORT, ()=>{
    console.log("Backend Server Running at localhost: " + PORT); 
});