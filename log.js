var fs = require('fs');
const date = new Date();
const year = date.getFullYear();
const month = two(date.getMonth() + 1);
const day = two(date.getDate());

const hours = two(date.getHours());
const minutes = two(date.getMinutes());
const seconds = two(date.getSeconds());

const par = process.argv.splice(2)[0];

const text = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${par}`;

fs.appendFile('./README.md', `\r* ${text}`, function () {});

function two(num){
	const tem = num < 10 ? `0${num}` : num;
	return tem;
}