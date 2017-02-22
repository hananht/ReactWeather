var React = require('react');

var WeatherMessage = (props) => {
    var { location, temp } = props;

    return (
        <h3 className="text-center">It's {temp} degree in {location}.</h3>
    );
}

module.exports = WeatherMessage;