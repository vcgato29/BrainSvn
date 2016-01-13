var React = require('react');

var RepoListView = React.createClass({
    render: function() {
        return (
            <ul>
                <li>
                    <a href="#">
                        <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                    </a>
                </li>    
            </ul>
        );
    }
});

export default RepoListView;
