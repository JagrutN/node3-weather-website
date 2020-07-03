const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=dc6ba8aa8188da76105061a01bc6072a&query=' + latitude + ',' + longitude + '&units=m'
    request({url , json : true}, (error, {body}) => {

        if (error) {
            callback('Unable to connect to weather services!!', undefined)
        }
        else if(body.error)
        {
            callback('Unable to find location', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] +". It is currently " +body.current.temperature+ " degrees out. Humididty is "+body.current.humidity+"%. The precipation is "+body.current.precip)
        }
    })
}

module.exports = forecast