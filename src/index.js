// import React from 'react'
// // class是定义组件关键字
// // App 组件的名称 必须是以大写字母开头
// // React.Component 是组件的父类 （基本的组件）
// // extends是继承
// class App extends React.Component{
// // 组件必须要有返回值
// // render是渲染组件的函数 渲染的时候必须有返回值
//     render(){
//         return '<div>hello world!</div>'
//     }
// }
// var hello = require('./hello.js');


// import hello from './hello.js'
// import './index.less';


// document.body.appendChild(hello());


import React from 'react';
import ReactDOM from 'react-dom';

import './index.less';

class APP extends React.Component  {
    render() {
        return (
        <h1>Hello Reactghfdh gfd </h1>
        )
    }
}


ReactDOM.render(<APP/>, document.getElementById('content'));