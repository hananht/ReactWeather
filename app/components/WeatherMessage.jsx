var React = require('react');

var WeatherMessage = (props) => {
    var { location, temp } = props;

    return (
        <p>It's {temp} degree in {location}.</p>
    );
}

module.exports = WeatherMessage;