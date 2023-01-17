import request from '@/utils/request'

// 首页数据接口
export const  frontpage = () => {
	return request('frontpage', 'GET', {})
}