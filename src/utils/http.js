import reqwest from 'reqwest';
import { Feedback } from '@icedesign/base';
const Toast = Feedback.toast;

export const http = (url, params = {}, method = 'get') => {
	return new Promise((resolve, reject) => {
		reqwest({ url, method, data: params, type: 'json' })
		.then((res) => { 
			if(res.success){
				resolve(res) 
			}else{
				Toast.error(res.msg);
			}
		})
		.fail((err,msg)=>{
			Toast.error('成功甩锅服务器，稍后重试～');
		});
	})
}