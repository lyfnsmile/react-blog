import React from 'react';

import Item from './item.jsx';

class ItemList extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
        data: []
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
      </div>                                
    )
	}

  componentDidMount(){
    const id = this.props.params.id;      
  }
};

module.exports=ItemList;