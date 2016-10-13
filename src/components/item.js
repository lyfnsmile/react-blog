import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class Item extends React.Component {
    
	constructor(props) {
        super(props);
        this.state = {data: this.props.data}
    }

	render(){
		return (
			<div className="post">
                <h2 className="post-title"><a href={this.state.data.url}>{this.state.data.title}{this.state.data._id}</a></h2>
                <div className="post-meta">{this.state.data.date}</div>
                <a data-thread-key={this.state.data.url} href={this.state.data.url} className="ds-thread-count"></a>
                <div className="post-content">
                    <p>{this.state.data.abstract}</p>
                </div>
                <p className="readmore"><Link to={this.state.data.url}>阅读更多...</Link></p>
                
            </div>
		)
	}

};
export default Item;
//<p className="readmore"><Link to={{pathname:"content/"+this.state.data.url}}>阅读更多...</Link></p><p className="readmore"><Link to={{pathname:"content/"+this.state.data.url}}>阅读更多...</Link></p>