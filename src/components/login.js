import React from 'react';
import {findDOMNode} from 'react-dom';
import "../style/form.css";

class Login extends React.Component {
   constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        };

        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handlerChange (ev){
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
    }

   render(){

        return (
        <form className="form-horizontal" role="form">
            <div className="form-group">
              <label htmlFor="email" className="col-sm-2 control-label">邮箱</label>
              <div className="col-sm-10">
                 <input type="email" className="form-control" id="email" value={this.state.email}
                    onChange={this.handlerChange.bind(this)} placeholder="请输入邮箱" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="col-sm-2 control-label">密码</label>
              <div className="col-sm-10">
                 <input type="password" className="form-control" id="password" value={this.state.password}
                    onChange={this.handlerChange.bind(this)} placeholder="请输入密码" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                 <button type="button" className="btn btn-default" onClick={this.handleSubmit}>登录</button>
              </div>
            </div>
        </form>
      )
   }

      handleSubmit(){

        console.log(findDOMNode(this.refs.email),this.state);

        //完成注册逻辑，暂时先不做有效性校验


   }

};

export default Login;