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
		<image mode="aspectFill" src="https://diancan-1252107261.cos.ap-chengdu.myqcloud.com/tianqi/tianqi-top.png">
		</image>
	</view>
	<view style="height:1000px">

	</view>
</template>

<script setup lang="ts">
	import {
		onMounted,
		ref
	} from 'vue'

	// 取出胶囊按钮数据
	let menu_top = ref < string > ('') //胶囊按钮到顶部距离的高度
	let menu_height = ref < string > ('') //胶囊按钮的高度
	interface MenuButton {
		bottom: number
		height: number
		left: number
		right: number
		top: number
		width: number
	}
	onMounted(() => {
		let menuButton: MenuButton = uni.getStorageSync('MenuButton')
		menu_top.value = menuButton.top + 'px'
		menu_height.value = menuButton.height + 'px'
		console.log('MenuButton', menuButton)
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
	
	.yuyue image{
	  width: 100%;
	  display: block;
	  height: 700rpx;
	}
	
</style>
