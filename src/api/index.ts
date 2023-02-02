import request from '@/utils/request'

// 首页数据接口
export const frontpage = () => {
	return request('frontpage', 'GET', {})
}


// 新冠疫苗预约时段
export const newaoopTime = () => {
	return request('newapptime', 'GET', {})
}