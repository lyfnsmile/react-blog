import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class Item extends React.Component {
    
	constructor(props) {
        super(props);
    }

	render(){
		return (
			<div className="post">
                <h2 className="post-title"><a href={this.props.data.actor.url}>{this.props.data.actor.url}</a></h2>
                
                
            </div>
		)
	}

};
export default Item;
