const request = require('postman-request')

const lat_long = '31.963158,35.930359'
// const url = 'http://api.weatherstack.com/current?access_key=3ebe6b1f57c4565c45d79abdb250afe7&query=' + lat_long


// request({url: url}, (error, response) => {
//     if (error){
//         console.log('SERVICE NOT AVAILABLE')
//     }
//     else if (JSON.parse(response.body).error){
//         console.log(JSON.parse(response.body).error)
//     }
//     else{
//         console.log(JSON.parse(response.body).location.country)
//     }
// })



// GET THE LONG AND LAT BY ADDRESS (FROM API 1)
// USE THE LONG AND LAT TO GET THE WEATHER (FROM API 2)
// DISPLAY THE RESULTS

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Amman%20Jordan.json?access_token=pk.eyJ1IjoieWVtYW4tYWxhc2hxYXIiLCJhIjoiY2tpNGJwZmZsMXJhNjJ5cWhhOGp1aWZ3dCJ9.7iyfEpuoc4SBTx3MMe7Wmg&limit=1"
request({url: url, json: true}, (error, response) => {
    lat = (response.body.features[0].center)[0]
    long = (response.body.features[0].center)[1]

    console.log(lat, long)

})

