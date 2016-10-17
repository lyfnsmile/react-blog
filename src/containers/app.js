import React,{Component} from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import Search from '../components/search';
import Tag from '../components/tag';
import Category from '../components/category';
import Footer from '../components/footer';
import ItemList from '../components/itemList';

import {fetchPosts, fetchUser} from '../actions/action'


class App extends Component {

	render(){	
    const {posts}=this.props;    
      return (
        <div>
          <Header />
          <div id="layout" className="pure-g container">
            <div className="col-md-9">
              <div className="content_container">
                <ItemList eventsList={posts} />                
              </div>
            </div>
            <div className="col-md-3">
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
      const {dispatch,selectedUser}=this.props
      dispatch(fetchPosts(selectedUser))
      dispatch(fetchUser(selectedUser))
  }
}


function mapStateToProps(state) {
  const { selectedUser, posts } = state

  posts.data=posts.data||[]

  return {
    selectedUser,
    posts
  }
  
}

export default connect(mapStateToProps)(App)

