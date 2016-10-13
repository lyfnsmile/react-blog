import {Component} from 'react';
import {Link} from 'react-router';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

	render(){
		return (
			<div className="post">
                <h1 className="post-title"></h1>
                <div className="post-content">
                    <h3 id="关于">
	                    <a href="#关于" className="headerlink" title="关于"></a>关于
	                    <img src="https://img.shields.io/badge/%E7%A8%8B%E5%BA%8F%E5%91%98-%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%88-brightgreen.svg" className="tagname" />
                    </h3>
                    <ul>
                        <li>Email: <code>li.zhixiang@live.cn</code></li>
                        <li>GitHub: <a href="https://github.com/lyfnsmile" target="_blank" rel="external">风不息</a></li>
                        <li>微博: <a href="http://weibo.com/u/2618327137?is_all=1" target="_blank" rel="external">拎壶充的微博</a></li>
                        <li>地址:<code>湖北武汉</code></li>
                    </ul>
                </div>
            </div>
		)
	}

    componentDidMount(){
        
    }
};

export default About;