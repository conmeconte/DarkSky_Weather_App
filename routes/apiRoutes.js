var moment = require('moment');

module.exports = (app, darksky)=>{

    app.post('/api/weather', (req, res)=>{
        console.log('api time', req.body.date); 
        darksky
        .options({
            latitude: req.body.lnglat.lat,
            longitude: req.body.lnglat.lng,
            time: req.body.date || null,
            language: 'en',
            // exclude: ['minutely', 'daily'],
            exclude: ['minutely'],
            extendHourly: true
        })
        .get()
        .then(value=>{
            res.send(value); 
        })
        .catch(err=>{
            res.send(err); 
        })
    })

    app.post('/api/weather/weekago', (req, res)=>{
        darksky
        .options({
            latitude: req.body.lnglat.lat,
            longitude: req.body.lnglat.lng,
            time: moment().subtract(1, 'weeks'),
            language: 'en',
            exclude: ['minutely'],
            extendHourly: true
        })
        .get()
        .then(value=>{
            res.send(value); 
        })
        .catch(err=>{
            res.send(err); 
        })
    })
}