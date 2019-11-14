const $ = require('jquery')
const moment = require('moment')

require('./css/index.css')


$('li:odd').css('color', 'red')
$('li:even').css('color', 'green')

$('li:first').text(moment().format('YYYY-MM-DD'))


console.log('1')
const aa = () => {
  console.log('嘻嘻嘻')
}