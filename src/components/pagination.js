import React from 'react';
import {IndexLink} from 'react-router';

class Pagination extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        currentPage:Number(this.props.currentPage)
    }
  }

	render(){
    let prev=this.state.currentPage-1;
    let next=this.state.currentPage;
		return (
			<nav className="page-navigator">
          <IndexLink to={{pathname:"/page/"+prev}} rel="prev" activeClassName="extend prev">上一页</IndexLink>
          <IndexLink to={{pathname:"/page/"+next}} rel="next" activeClassName="extend next">下一页</IndexLink>
      </nav>
		)
	}

    componentDidMount(){
      fetch('http://localhost:4100/count')
        .then((response) => 
           response.json()
        ).then((json) => 
           this.setState({count:json.count})
        ).catch((err) =>
          console.log('parsing failed', err)
        )  
        
    }
};


module.exports=Pagination;