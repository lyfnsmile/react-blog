import React from 'react';
import { Link } from 'react-router';

class ArchiveList extends React.Component {
	constructor(props) {
        super(props);
        this.state = {data: this.props.data}
    }
	render(){
		return (
			<div className="post-archive">
                <h2>{this.state.data.year}</h2>
                <ul className="listing">
                    {
                    this.state.data.titles.map(function(item,index){
                        return <li key={index}>
                                   <span className="date">2016/05/18</span>
                                   <Link to="/p/1" title={item}>{item}</Link>
                               </li>
                        })
                    }                    
                </ul>
            </div>
		)
	}
};

export default ArchiveList;