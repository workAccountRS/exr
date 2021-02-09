/* STEPS: 

1) SIGN UP
2) GET API KEY
3) const request = require('postman-request')
4) const url = 'http://api.weatherstack.com/current?access_key=3ebe6b1f57c4565c45d79abdb250afe7&query=' + lat_long
5) 

request({url: url}, (error, response) => {
    if (error){
        console.log('SERVICE NOT AVAILABLE')
    }
    else if (JSON.parse(response.body).error){
        console.log(JSON.parse(response.body).error)
    }
    else{
        country = JSON.parse(response.body).location.country
        temp = JSON.parse(response.body).current.temperature
        console.log(country, temp)
    }
})

*/

const request = require('postman-request')

const lat_long = '31.963158,35.930359'
const url = 'http://api.weatherstack.com/current?access_key=3ebe6b1f57c4565c45d79abdb250afe7&query=' + lat_long


request({url: url}, (error, response) => {
    if (error){
        console.log('SERVICE NOT AVAILABLE')
    }
    else if (JSON.parse(response.body).error){
        console.log(JSON.parse(response.body).error)
    }
    else{
        console.log(response.body)
        country = JSON.parse(response.body).location.country
        temp = JSON.parse(response.body).current.temperature
        
    }
})


const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Amman%20Jordan.json?access_token=pk.eyJ1IjoieWVtYW4tYWxhc2hxYXIiLCJhIjoiY2tpNGJwZmZsMXJhNjJ5cWhhOGp1aWZ3dCJ9.7iyfEpuoc4SBTx3MMe7Wmg&limit=3"

request({url: mapBoxUrl, json: true}, (error, response) => {
    lat = (response.body.features[0].center)[0]
    long = (response.body.features[0].center)[1]

    console.log(lat, long)
})