import React,{Component} from 'react';
import { connect } from 'react-redux';

import Header from './components/header';
import Search from './components/search';
import Tag from './components/tag';
import Category from './components/category';
import Footer from './components/footer';


//引入样式文件
class App extends Component {

	render(){		
		return (
			<div>
				<Header />
        <div id="layout" className="pure-g">
          <div className="pure-u-1 pure-u-md-3-4">
            <div className="content_container">
    		      {this.props.children}
        		</div>
        	</div>
        	<div className="pure-u-1-4">
      			<div id="sidebar">
      				<Search />
      				<Category />
      				<Tag />                				
      			</div>
      		</div>
        </div>
        <Footer />
      </div>
		)
	}

  componentDidMount(){
      
  }
}


function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state
  
}

export default connect(mapStateToProps)(App)

