var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>A weather application, built on React framework & foundation.</p>
            <p>This site uses a weather API from <a href="https://openweathermap.org/">openweathermap</a> web service.</p>
            <p>App created by <b>Hanan Tamayev</b> following React course on <a href="http://udemy.com/">udemy</a> online academy.</p>
        </div>
    );
}

module.exports = About;