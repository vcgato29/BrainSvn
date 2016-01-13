var React = require('react');
var NavBar = require('./navbar/NavBar.react');

var Header = React.createClass({
    render: function() {
        return (
            <header className="header">
                <a href="index.html" className="logo">
                    BrainSvn
                </a>
                <nav className="navbar navbar-static-top" role="navigation">
                    <a href="#" className="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </a>
                    <NavBar />
                </nav>
            </header>
        );
    }
});

export default Header;
