import React from 'react';
import { Link } from 'react-router';

class Tag extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: this.props.data}
    }

	render(){
		return(
			<div className="widget">
                <div className="widget-title"><i className="fa fa-star-o"> 标签</i></div>
                <div className="tagcloud">                 
                	<Link to="/tags/JavaScript/">JavaScript</Link> 
                	<a href="/tags/mongodb/">mongodb</a> 
                	<a href="/tags/工作/">工作</a> 
                	<a href="/tags/mysql/">mysql</a> 
                	<a href="/tags/Node-js/">Node.js</a> 
                	<a href="/tags/webpack-前端-打包工具">webpack 前端 打包工具  react</a>
                </div>
            </div>
		)
	}

}

export default Tag;