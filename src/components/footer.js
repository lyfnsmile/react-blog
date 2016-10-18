import React,{Component} from 'react';
import { Link } from 'react-router';

class Footer extends Component {
	render(){
		return (
			<div className="pure-u-1 pure-u-md-3-4">
        <div id="footer">© 
        	<Link href="/" rel="nofollow">风不息.</Link> 
            Powered by
        	<Link rel="nofollow" target="_blank" to="https://hexo.io"> Hexo.</Link>
        </div>
      </div>
		)
	}
}

export default Footer;