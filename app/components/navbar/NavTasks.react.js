var React = require('react');

var NavTasks = React.createClass({
  render: function() {
    var widthStyle = {
        width: '20%'
    };
    
    return (
      <li className="dropdown tasks-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-tasks"></i>
              <span className="label label-danger">1</span>
          </a>
          <ul className="dropdown-menu">

              <li className="header">You have 1 task</li>
              <li>
                  <ul className="menu">
                      <li>
                          <a href="#">
                              <h3>
                                  Design some buttons
                                  <small className="pull-right">20%</small>
                              </h3>
                              <div className="progress progress-striped xs">
                                  <div className="progress-bar progress-bar-success" style={widthStyle} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">20% Complete</span>
                                  </div>
                              </div>
                          </a>
                      </li>
                  </ul>
              </li>
              <li className="footer">
                  <a href="#">View all tasks</a>
              </li>

          </ul>
      </li>
    )
  }
});

export default NavTasks;
