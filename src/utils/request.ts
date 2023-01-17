import { Base64 } from "js-base64";
// 公用的请求
const baseUrl = 'https://meituan.thexxdd.cn/api/';

function getToken(): string {
	const token = uni.getStorageSync('wxuser').user_Token || '';
	const base64_token = Base64.encode(token + ':');
	return 'Basic ' + base64_token;
}
// 请求
// 请求数据
function request(
	url: string,
	method: 'GET' | 'POST',
	data: string | object | ArrayBuffer
) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method,
			data,
			header: { Authorization: getToken() },
			success: (res: any) => {
				if (res.statusCode == 200) {
					resolve(res);
				} else if (res.statusCode == 401) {
					// 没有权限访问接口:跳转到登陆界面
					uni.navigateTo({ url: '/pages/login-page/index' });
					reject(res);
				} else if (res.statusCode == 400) {
					uni.showToast({
						title: '开发者某个字段或参数填写不对',
						icon: 'none',
						duration: 1000,
					});
					reject(res);
				} else if (res.statusCode == 500) {
					uni.showToast({
						title: '服务器发生未知错误',
						icon: 'none',
						duration: 1000,
					});
					reject(res);
				} else if (res.statusCode == 202) {
					uni.showToast({ title: res.data.msg, icon: 'none', duration: 1000 });
					reject(res);
				} else {
					uni.showToast({
						title: '服务器发生未知错误',
						icon: 'none',
						duration: 1000,
					});
					reject(res);
				}
			},
			fail: (err: any) => {
				uni.showToast({
					title: '服务器发生未知错误',
					icon: 'none',
					duration: 1000,
				});
				reject(err);
			},
		});
	});
}

export default request