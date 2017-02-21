var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=4ff3723e3c7d87efb473d74b4c17a1d5';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
 
        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod !== "200") {
                throw new Error(res.data.message);
            }
            else {
                return res.data.list[0].main.temp;
            }
        }, function(err) {
            throw new Error(err.data.message);
        });
    }
};