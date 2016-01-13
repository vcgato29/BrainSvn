var React = require('react');
var RepoAdd = require('./RepoAdd.react');
var RepoCommit = require('./RepoCommit.react');
var RepoUpdate = require('./RepoUpdate.react');
var NavTasks = require('./NavTasks.react');
var NavMessages = require('./NavMessages.react');

var NavBar = React.createClass({
    render: function() {
        return (
            <div class="navbar-right">
                <ul className="nav navbar-nav">
                    <RepoAdd/>
                    <RepoCommit/>
                    <RepoUpdate/>
                    <NavTasks/>
                    <NavMessages/>
                </ul>
            </div>
        );
    }
});

export default NavBar;
