import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import _ from 'lodash';

import App from './app';
import Content from './components/content';
import ItemList from './components/itemList';
import Archives from './components/archives';
import About from './components/about';
import Photography from './components/photography';
import Login from './components/login';
import Register from './components/register';
import Post from "./components/post";
import NoMatch from './components/nomatch';

//引入样式文件

import './style/style.css';

import configureStore from './stores/configureStore';

let store = configureStore();

console.log(store)

render(	
	<Provider store={store}>
	    <Router history={browserHistory}>
		    <Route path="/" component={App}>
		        <IndexRoute component={ItemList} />
		        <Route path="/page/:currentPage" component={ItemList} /> 
		        <Route path="/about" component={About} /> 
		        <Route path="/archives" component={Archives} /> 
		        <Route path="/content" component={Content} />
		        <Route path="/photography" component={Photography} />
		        <Route path="/content/:id" component={Content} />      
		    </Route>
		    <Route path="/login" component={Login} />
		    <Route path="/register" component={Register} />
		    <Route path="/admin/post" component={Post} />
		    <Route path="*" component={NoMatch} />
	  	</Router>
  	</Provider>,
	document.querySelector('#root')
);
