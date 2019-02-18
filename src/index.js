const component = require('./component')

import './css/index.css'

component()

let dom = document.createElement('div')
dom.innerHTML = 'hello world'
dom.classList.add('box')
document.body.appendChild(dom)