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
			<div>
				<div id="header">
		            <div className="site-name">
		                <h1 className="hidden">{this.state.data.user}</h1><Link id='logo' to="/">{this.state.data.user}</Link>
		                <p className="description">{this.state.data.subTitle}</p>
		            </div>
		            <div id="nav-menu">
		            	<IndexLink to="/" activeClassName="current"><i className="fa fa-home">首页</i></IndexLink>
		            	<IndexLink to="/archives/" activeClassName="current"><i className="fa fa-archive"> 归档</i></IndexLink>
		            	<IndexLink to="/photography/" activeClassName="current"><i className="fa fa-picture-o"> photography</i></IndexLink>
		            	<IndexLink to="/about/" activeClassName="current"><i className="fa fa-user"> 关于</i></IndexLink>
		            </div>
		        </div>
	        </div>
		)
	}

	componentDidMount(){

        fetch('http://localhost:3000/getInfo')
		  .then((response) => 
			 response.json()
		  ).then((json) => 
			 this.setState({data: json})
		  ).catch((ex) =>
		    console.log('parsing failed', ex)
		  )        
    }
};

export default Header;