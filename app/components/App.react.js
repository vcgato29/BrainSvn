var React = require('react');
var Header = require('./Header.react');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="wrapper row-offcanvas row-offcanvas-left">
                    <aside className="left-side sidebar-offcanvas">
                        <section className="sidebar">
                            <form action="#" method="get" className="sidebar-form">
                                <div className="input-group">
                                    <input type="text" name="q" className="form-control" placeholder="Search..."/>
                                    <span className="input-group-btn">
                                        <button type='submit' name='seach' id='search-btn' className="btn btn-flat">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </span>
                                </div>
                            </form>

                        </section>
                    </aside>

                    <aside className="right-side">

                        <section className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="panel">
                                        <header className="panel-heading">
                                            Bordered Table

                                        </header>

                                    </div>

                                </div>
                            </div>
                        </section>
                        <div className="footer-main">
                            Copyright &copy Director, 2014
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
});

export default App;
