import React from 'react';
import { IndexLink } from 'react-router';
import '../style/nomatch.css';

class NoMatch extends React.Component{
	render(){
		return(
			<div className="nomatch">
                <p><span className="notfound">您要找的页面飞走了~~</span>
                回到<IndexLink to="/">首页</IndexLink></p>
            </div>
		)
	}
}

export default NoMatch;