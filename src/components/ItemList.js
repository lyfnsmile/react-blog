import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from './pagination.jsx';

import Item from './item.jsx';

class ItemList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentPage:this.props.params.currentPage||0
        }
    }

	render(){
        console.log(this.state.currentPage)
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
        console.log(currentPage)
        let url='http://localhost:4100/contentlist?_limit='+limit+'&_start='+currentPage*limit;
        console.log(url)
        //http://localhost:4100/contentlist?_limit='+limit&"_start="+limit*currentPage
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

module.exports=ItemList;
