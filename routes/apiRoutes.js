

module.exports = (app, darksky)=>{

    app.post('/api/weather', (req, res)=>{
        console.log('api time', req.body.date); 
        darksky
        .options({
            latitude: req.body.lnglat.lat,
            longitude: req.body.lnglat.lng,
            time: req.body.date,
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
}