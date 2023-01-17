// 这是类型声明文件
// 类型声明文件不会装换成es代码 

// 定义小程序胶囊位置参数
export interface MenuButton {
	bottom: number
	height: number
	left: number
	right: number
	top: number
	width: number
}

// 首页第一项数据：疫苗预约
export interface Vaccine {
	image: string;
	title: string;
}

// 首页第一项数据：挂号和体检
export interface Pyhdata {
	describe: string;
	image: string;
	title: string;
}

//首页第三项数据 热门挂号
export interface Registered {
	background: string
	dep_id: string
	image: string
	title: string
}