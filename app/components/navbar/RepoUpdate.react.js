var React = require('react');

var RepoUpdate = React.createClass({
    render: function() {
        return (
            <li className="dropdown repo-update-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-arrow-down"></i>
                    <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="header">You have 4 messages</li>
                    <li>
                        <ul className="menu">
                            <li>
                                <a href="#">
                                    <div className="pull-left">
                                        <img src="img/avatar3.png" className="img-circle" alt="User Image"/>
                                    </div>
                                    <h4>
                                        Support Team
                                        <small>
                                            <i className="fa fa-clock-o"></i>
                                            5 mins</small>
                                    </h4>
                                    <p>Why not buy a new awesome theme?</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer">
                        <a href="#">See All Messages</a>
                    </li>
                </ul>
            </li>
        );
    }
});

export default RepoUpdate;
