<template>
	<!-- 自定义导航 -->
	<view class="nav-gation">
		<view class="nav-top">

		</view>
		<view class="nav-height ">
			某某第一人民医院
		</view>
	</view>
	<view class="yuyue">
		<image mode="aspectFill" src="https://diancan-1252107261.cos.accelerate.myqcloud.com/yiliao/nav-yiyu.png">
		</image>
	</view>
	<!-- 疫苗预约 -->
	<view class="gongge">
		<view v-for="(item,index) in vaccine" :key="index">
			<image :src="item.image" mode="aspectFit"></image>
			<text>{{item.title}}</text>
		</view>
	</view>
	<!-- 挂号和体检 -->
	<view class="re-me-ex">
		<view class="re-me-ex-view" v-for="(item,index) in pyhdata" :key="index">
			<text class="re-me-ex-title">{{item.title}}</text>
			<text class="re-me-ex-label">{{item.describe}}</text>
			<image :src="item.image" mode="aspectFit"></image>
		</view>
	</view>
	<!-- 热门挂号 -->

	<!-- 健康自测 -->

</template>

<script setup lang="ts">
	import {
		onMounted,
		ref
	} from 'vue'
	import {
		frontpage
	} from '@/api/index'

	import {
		MenuButton,
		Vaccine,
		Pyhdata,
		Registered
	} from '@/type/decl-type'

	// 定义取出胶囊按钮数据
	let menu_top = ref < string > ('') //胶囊按钮到顶部距离的高度
	let menu_height = ref < string > ('') //胶囊按钮的高度


	// 首页第一项数据：疫苗预约
	let vaccine = ref < Vaccine[] > ([])
	
	// 首页第二项数据：挂号和体检
	let pyhdata = ref < Pyhdata[] > ([])

	//首页第三项数据：热门挂号
	let registered = ref < Registered[] > ([])

	/* 获取首页数据 */
	const getPageData = async () => {
		const res: any = await frontpage()
		if (res.data && res.data.data) {
			vaccine.value = res.data.data[0].vaccine
			pyhdata.value = res.data.data[1].reserve
			registered.value = res.data.data[2].popular
			
		}

		console.log('res', res)
	}



	onMounted(() => {
		let menuButton: MenuButton = uni.getStorageSync('MenuButton')
		menu_top.value = menuButton.top + 'px'
		menu_height.value = menuButton.height + 'px'
		console.log('MenuButton', menuButton)
		getPageData()
	})
</script>

<style scoped>
	nav-gation {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		background-color: rgba(255, 255, 255, v-bind('styleOpacity'));
	}

	.nav-top {
		/* vue3新特性动态样式  v-bind*/
		height: v-bind('menu_top')
	}

	.nav-height {
		height: v-bind('menu_height');
		line-height: v-bind('menu_height');
		padding-left: 20rpx;
		margin-bottom: 10rpx;
		color: v-bind('styleColor');
		font-weight: bold;
		font-size: 35rpx;
	}

	.yuyue image {
		width: 100%;
		display: block;
		height: 600rpx;
	}
</style>
