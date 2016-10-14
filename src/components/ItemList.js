import React from 'react';
import Pagination from './pagination';

import Item from './item';
import Loading from './loading';

class ItemList extends React.Component {
    
  constructor(props) {
      super(props);
  }

	render(){

    const {eventsList}=this.props;
    console.log(this.props,324)


    return(
      <div>
        {
          eventsList.isFetching&&<Loading />
        }
        {
          !eventsList.isFetching&&
          eventsList.data.map(function(item,index){
              return <Item data={item} key={index} />
          })
        }
      </div>                                
    )
	}

};

export default ItemList;
