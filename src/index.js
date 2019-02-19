const component = require('./component')

import './css/index.css'
import { a, b } from '@/a'

component()

let dom = document.createElement('div')
dom.innerHTML = 'hello world11'
dom.classList.add('box')
document.body.appendChild(dom)

console.log({ a, b })

// class test {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }

//   toString() {
//     return '(' + this.x + ', ' + this.y + ')'
//   }
// }

// test(1, 2)
// test.toString()
