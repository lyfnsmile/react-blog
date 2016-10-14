import React from 'react';
import {Link,IndexLink} from 'react-router';

class Header extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

	render(){
		return (
			<div className="col-md-10 col-md-offset-1">
				<div id="header">
          <div className="site-name">
              <h1>{this.state.data.user}</h1><Link id='logo' to="/">风不息</Link>
              <p className="description">风不息的前端笔记</p>
          </div>
          <div id="nav-menu">
          	<IndexLink to="/" activeClassName="current"><i className="glyphicon glyphicon-plus">首页</i></IndexLink>
          	<IndexLink to="/archives/" activeClassName="current"><i className="fa fa-archive"> 归档</i></IndexLink>
          	<IndexLink to="/photography/" activeClassName="current"><i className="fa fa-picture-o"> photography</i></IndexLink>
          	<IndexLink to="/about/" activeClassName="current"><i className="fa fa-user"> 关于</i></IndexLink>
          </div>
        </div>
      </div>
		)
	}

	componentDidMount(){
     
  }
};

export default Header;