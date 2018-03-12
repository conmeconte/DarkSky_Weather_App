var moment = require('moment');

module.exports = (app, darksky)=>{
    app.post('/api/weather', (req, res, next)=>{
        console.log(req.body.date); 
        darksky
        .options({
            latitude: req.body.lnglat.lat,
            longitude: req.body.lnglat.lng,
            time: req.body.date || moment().subtract(1, 'weeks'),
            language: 'en',
            exclude: ['minutely'],
            extendHourly: false
        })
        .get((err)=>{
            if(err){
                return next(err); 
            }
        })
        .then(value=>{
            res.send(value); 
        })
        .catch(err=>{
            res.send(err); 
        })
    })

}
