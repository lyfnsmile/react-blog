import React from 'react';
import Pagination from './pagination';

import Item from './item';

class ItemList extends React.Component {
    
  constructor(props) {
      super(props);
  }

	render(){

    const {eventsList}=this.props;
    console.log(this.props)


    return(
      <div>
        {
          eventsList.data.map(function(item,index){
              return <Item data={item} key={index} />
          })
        }
      </div>                                
    )
	}

};

export default ItemList;
