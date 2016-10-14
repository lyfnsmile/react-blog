import React from 'react';

import Item from './item';
import Loading from './loading';

class ItemList extends React.Component {

	render(){
    const {eventsList}=this.props;
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
