import React from 'react';
import {findDOMNode} from 'react-dom';

import "../style/form.css";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            repassword:''
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handlerChange (ev){
        console.log(ev.target.value);
        if(ev.target.id==="email"){
            this.setState({
                email:ev.target.value
            })
        };
        if(ev.target.id==="password"){
            this.setState({
                password:ev.target.value
            })
        };
        if(ev.target.id==="rePassword"){
            this.setState({
                repassword:ev.target.value
            })
        };
    }

    render(){

      return (
        <form className="form-horizontal" role="form">
            <div className="form-group">
              <label htmlFor="email" className="col-sm-2 control-label">用户名</label>
              <div className="col-sm-10">
                 <input type="text" className="form-control" id="email" ref="email" value={this.state.email}
                    onChange={this.handlerChange.bind(this)} placeholder="请输入名字" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 control-label">密码</label>
              <div className="col-sm-10">
                 <input type="password" className="form-control" id="password" ref="password" value={this.state.password}
                  onChange={this.handlerChange.bind(this)} placeholder="请输入密码" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="rePassword" className="col-sm-2 control-label">密码</label>
              <div className="col-sm-10">
                 <input type="password" className="form-control" id="rePassword" ref="rePassword" value={this.state.repassword}
                   onChange={this.handlerChange.bind(this)} placeholder="请输入密码" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                 <button type="button" className="btn btn-default" onClick={this.handleSubmit}>注册</button>
              </div>
            </div>
        </form>
      )
   }


   handleSubmit(){

        console.log(findDOMNode(this.refs.email),this.state);

        //完成注册逻辑，暂时先不做有效性校验
        let send={
            "email":this.state.email,
            "password":this.state.password
        };

   }

};

export default Register;