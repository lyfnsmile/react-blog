import React from 'react';
import {render} from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';

import App from './containers/app';
import Content from './components/content';
import ItemList from './components/itemList';
import Archives from './components/archives';
import About from './components/about';
import Login from './components/login';
import Register from './components/register';
import Post from "./components/post";
import NoMatch from './components/nomatch';

//引入样式和字体文件
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css';

import configureStore from './stores/configureStore';

let store = configureStore();


render(	
	<Provider store={store}>
	    <Router history={browserHistory}>
		    <Route path="/" component={App}>
		        <IndexRoute component={ItemList} />
		        <Route path="/page/:currentPage" component={ItemList} /> 
		        <Route path="/about" component={About} /> 
		        <Route path="/archives" component={Archives} /> 
		        <Route path="/content" component={Content} />
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
