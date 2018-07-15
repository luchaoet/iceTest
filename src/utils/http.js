// const url = location.href;
import ajax from '@ali/ice-ajax';
import { Feedback } from '@alife/next';
const Toast = Feedback.toast;
import { browserHistory } from 'react-router';
export const http = (url,params={},type='get') => {
	return new Promise((resolve, reject) => {
		ajax({
			url, 
			data:params,
			dataType: 'json',
			type
		})
		.then(res => {
			resolve(res)
			//未登录 跳转至登陆页
            // if(res.code === 6){
			// 	Toast.error(res.msg);
			// 	browserHistory.push(`/login`);
            // }
		})
		.catch(error => {
			Toast.error('成功甩锅服务器，稍后重试～');
		})
	})
}
