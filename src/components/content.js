import React,{Component} from 'react';

class Content extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

	render(){
		return(
			<div className="post">
                <h1 className="post-title">{this.state.data.title}</h1>
                <div className="post-meta">{this.state.data.date}<span> | </span><span className="category"><a href="/categories/Emotion/">Emotion</a></span>
                    <span>{this.state.data.viewsCount} Hits</span>
                </div>
                <a data-thread-key="2016/05/一点儿工作感悟/" href="/2016/05/一点儿工作感悟/#comments" className="ds-thread-count"></a>
                <div className="post-content">
                {this.state.data.content}
                </div>

                <div data-thread-key="2016/05/一点儿工作感悟/" data-title="一点儿工作感悟" data-url="http://fnpyud.com/2016/05/一点儿工作感悟/" data-author-key="1" className="ds-thread"></div>
            </div>
        )
	}

    componentDidMount(){

        
    }
}


export default Content;