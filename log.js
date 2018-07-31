var fs = require('fs');
const date = new Date();
const year = date.getFullYear();
const month = two(date.getMonth() + 1);
const day = two(date.getDate());

const hours = two(date.getHours());
const minutes = two(date.getMinutes());
const seconds = two(date.getSeconds());


const text = '1使用fs.appendFile追加文件内容';
console.log(`${year}-${month}-${day} ${hours}:${}`)
return;
fs.appendFile('./log.js', `\r\n// ${text}`, function () {});

function two(num){
	const tem = num < 10 ? `0${num}` : num;
	return tem;
}

/**
 * log 记录
*/

