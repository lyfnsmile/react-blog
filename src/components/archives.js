import React from 'react';
import {Link} from 'react-router';
import ArchiveList from './archiveList';

class Archives extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

	render(){
		return (
			<div>				
				<div className="post">
	                {
	                    this.state.data.map(function(item,index){
	                        return <ArchiveList data={item} key={index} />
	                    })
	                }
	            </div>
	            <nav className="page-navigator">
		            <span className="page-number current">1</span>
		            <a className="page-number" href="/archives/page/2/">2</a>
		            <a className="extend next" rel="next" href="/archives/page/2/">下一页</a>
	            </nav>
            </div>
		)
	}

	componentDidMount(){

        
    }
};

export default Archives;