var text = require('./hello');
require('style-loader!css-loader!./index.css');
console.log(text);
document.body.appendChild(document.createElement('div'));
