import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Photography extends React.Component {
	render(){
		return (
			<div className="post">
                <h1 className="post-title"></h1>
                <div className="post-content">
                    <p><em>历次外出游rwer玩照片展示：</em></p>
                    <ul>
                        <li><a href="./04/24/">4.24日回母校拍的照片</a></li>
                    </ul>
                </div>
            </div>
            
        )
	}
};

export default Photography;