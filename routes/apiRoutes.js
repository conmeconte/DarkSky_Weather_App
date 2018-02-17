

module.exports = (app, darksky)=>{
    console.log('arrived at backend');

    app.get('/api/weather', (req, res)=>{
        darksky
        .options({
            latitude: 37.8267,
            longitude: -122.423,
            time: '2017-08-10',
            language: 'en',
            exclude: ['minutely', 'daily'],
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