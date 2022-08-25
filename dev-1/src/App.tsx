import React from 'react';
import './dev-1.css';


function App() {
  return (
    <div className="All">
        <h2>登录</h2>
        <div className="Login">
            <div className="input-box">
                <label>账号:</label>
                <input className='admin' type="text" />
            </div>
            <div className="input-box">
                <label>密码:</label>
                <input className='pwd' type="password" />
            </div>
            <div className="btn-box">
                <a href="#">忘记密码？</a>
                <div>
                    <button className='login'>登录</button>
                    <button className='registered'>注册</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
