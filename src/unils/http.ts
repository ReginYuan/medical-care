// 共用请求接口
const baseUrl = 'https://meituan.thexxdd.cn/api/'

function request(url: string, method: 'GET' | 'POST' | 'PUT', data: string | object | ArrayBuffer) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url
		})
	})
}