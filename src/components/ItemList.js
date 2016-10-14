import React from 'react';
import Pagination from './pagination';

import Item from './item';

class ItemList extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = {
          data: [],
          currentPage:this.props.params.currentPage||0
      }
  }

	render(){
    return(
      <div>
        {
          this.state.data.map(function(item,index){
              return <Item data={item} key={index} />
          })
        }
        <Pagination currentPage={this.state.currentPage} />
      </div>                                
    )
	}

  componentDidMount(){
    let currentPage = this.state.currentPage;
    const limit=8;     
    currentPage=(currentPage?currentPage:0);
    let url='http://localhost:4100/contentlist?_limit='+limit+'&_start='+currentPage*limit;
    
    fetch(url)
      .then((response) => 
         response.json()
      ).then((json) => 
         this.setState({data: json})
      ).catch((ex) =>
        console.log('parsing failed', ex)
      )        
  }
};

export default ItemList;
