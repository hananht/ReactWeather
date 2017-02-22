var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few locations to try out:</p>
            <ol>
                <li><Link to="/?location=Jerusalem, Israel">Jerusalem, Israel</Link></li>
                <li><Link to="/?location=Eilat">Eilat</Link></li>
            </ol>
        </div>
    );
}

module.exports = Examples;