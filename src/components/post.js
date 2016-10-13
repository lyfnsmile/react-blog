//发表文章的组件
//默认使用markdown语法
//表单组件

import React from 'react';
import {findDOMNode} from 'react-dom';
import {Link} from 'react-router';

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"",
            content:"",
            tags:""
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handlerChange (ev){
        console.log(ev.target.value);
        if(ev.target.id==="title"){
            this.setState({
                title:ev.target.value
            })
        };
        if(ev.target.id==="content"){
            this.setState({
                content:ev.target.value
            })
        };
        if(ev.target.id==="tags"){
            this.setState({
                tags:ev.target.value
            })
        };
    }

	render(){

		const style={
			margin: 'auto',
			marginTop: 40
		}

		return (
			<form role="form" id="post" style={style}>
				<div className="form-group">
			        <label className="sr-only" htmlFor="title" className="col-sm-2">标题</label>
			        <input type="text" className="form-control col-sm-10" id="title" ref="title"
			         placeholder="请输入标题" value={this.state.title} onChange={this.handlerChange.bind(this)} />
			    </div>
			    <div className="form-group">
			        <label className="sr-only" htmlFor="tags" className="col-sm-2">标签</label>
			        <input type="text" className="form-control col-sm-10" id="tags" ref="tags"
			         placeholder="文章标签" value={this.state.tags} onChange={this.handlerChange.bind(this)} />
			    </div>
			    <div className="form-group">
			    	<label htmlFor="name" className="col-sm-2">文本框</label>
			    	<textarea className="form-control col-sm-10" rows="10" ref="content" value={this.state.content} id="content" onChange={this.handlerChange.bind(this)}></textarea>
			    </div>
			    <div className="form-group">
	                <div className="col-sm-12">
	                    <button type="button" className="btn btn-default" onClick={this.handleSubmit}>确认</button>
	                </div>
                </div>
			</form>
		)
	}


    handleSubmit(){
    	//获取当前提交时间
    	let date=new Date().getTime();

        //完成注册逻辑，暂时先不做有效性校验
        let send={
            "title":this.state.title,
            "content":this.state.content,
            "date":date,
            "tags":this.state.tags
        };


    }
};

export default Post;

