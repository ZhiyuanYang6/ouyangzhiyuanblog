import _ from 'lodash';
import hacker from './plugins/hacker.js';
import logo from './static/images/logo.png';
// import printMe from './print.js';
import './styles/style.css'
// function component() {
//     var element = document.createElement('div');
//     var btn = document.createElement('div');
//     // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;
    
//     element.appendChild(btn);
//     return element;
// }
setInterval(hacker, 33);
document.getElementById('logo').src = logo;
// document.body.appendChild(component());