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
		            <Link className="page-number" to="/archives/page/2/">2</Link>
		            <Link className="extend next" rel="next" to="/archives/page/2/">下一页</Link>
	            </nav>
            </div>
		)
	}

	componentDidMount(){

        
    }
};

export default Archives;