import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Category extends React.Component{
	render(){
		return(
			<div className="widget">
                <div className="widget-title"><i className="fa fa-folder-o"> 分类</i></div>
                <ul className="category-list">
                    <li className="category-list-item">
                        <Link className="category-list-link" to="/categories/Emotion/">Emotion</Link>
                    </li>
                    <li className="category-list-item">
                        <Link className="category-list-link" to="/categories/Emotion/">Emotion</Link>
                    </li>
                    <li className="category-list-item">
                        <Link className="category-list-link" to="/categories/Emotion/">Emotion</Link>
                    </li>
                    <li className="category-list-item">
                        <Link className="category-list-link" to="/categories/Emotion/">Emotion</Link>
                    </li>
                </ul>
            </div>
		)
	}
}

export default Category;