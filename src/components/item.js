import React from 'react';
import { Link } from 'react-router';

class Item extends React.Component {


	render(){
		return (
			<div className="post">
                <h2 className="post-title"><Link to={this.props.data.actor.url}>{this.props.data.actor.url}</Link></h2>
                               
            </div>
		)
	}

};
export default Item;
