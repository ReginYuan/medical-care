<template>
	<view class="xinguan-view">
		<view class="xinguan-flex">
			<text>姓名</text>
			<input placeholder="请输入姓名" placeholder-class="input-style" />
		</view>
		<view class="xinguan-flex">
			<text>身份证</text>
			<input placeholder="请输入身份证" placeholder-class="input-style" />
		</view>
		<view class="xinguan-flex">
			<text>手机号</text>
			<input placeholder="请输入手机号" placeholder-class="input-style" />
		</view>
		<view class="xinguan-flex">
			<text>现居地址</text>
			<picker mode="region" class="flex-left">
				<view>
					<text>请选择现居地址</text>
					<image src="@/static/other/gengduo.svg"></image>
				</view>
			</picker>
		</view>
		<view class="xinguan-flex">
			<text>现居详细地址</text>
			<input placeholder="请输入现居详细地址" placeholder-class="input-style" />
		</view>
		<view class="xinguan-flex">
			<text>疫苗人群分类</text>
			<picker mode="selector" class="flex-left" :range="[1,2,3,4,5]">
				<view>
					<text>请选择疫苗人群分类</text>
					<image src="@/static/other/gengduo.svg"></image>
				</view>
			</picker>
		</view>
	</view>
	<!-- 预约是时间 -->
	<view class="">
		<!-- 医院地址 -->
		<view class="reserve-address">
			<text class="reserve-name">111</text>
			<text class="reserve-road">111</text>
			<view class="reserve-title">
				<text>111</text>
			</view>
		</view>
		<!-- 星期 -->
		<view class="Week">
			<view class="Week-flex">
				<view class="Week-style Week-sup">
					<text>1</text>
					<text>2</text>
					<text>3</text>
				</view>
			</view>
		</view>
		<!-- 时段 -->
		<view class="period-view">
			<text class="period-title">标题</text>
			<view class="Week-flex">
				<view class="Week-style Week-Down">
					<text>111</text>
					<text>222</text>
				</view>
			</view>
		</view>
	</view>
	<!-- 底部按钮 -->
	<view style="height: 200rpx;"></view>
	<view class="submit">
		<text>取消</text>
		<text>提交预约</text>
	</view>
</template>

<script setup lang="ts">
</script>

<style>
	/* 表单提交 */
	@import url('@/common-style/form.css');

	page {
		background-color: #f7f7f7;
	}

	/* 预约地址 */
	.reserve-address {
		background-color: #ffffff;
		padding: 20rpx;
		margin: 20rpx;
		border-radius: 10rpx;
	}

	.reserve-address text {
		display: block;
	}

	.reserve-name {
		font-weight: bold;
	}

	.reserve-road {
		padding: 20rpx 0;
	}

	.reserve-title {
		display: flex;
		align-items: center;
	}

	.reserve-title text {
		background-color: #f7f7f7;
		padding: 5rpx 20rpx;
		font-size: 25rpx;
		margin-right: 10rpx;
	}

	.Week {
		background-color: #ffffff;
		padding: 20rpx;
		border-radius: 10rpx;
		margin: 20rpx;
		display: flex;
		align-items: center;
	}

	.Week-flex {
		display: flex;
	}

	.Week-style {
		display: flex;
		flex-direction: column;
		background: #f7f7f7;
		text-align: center;
		padding: 20rpx 0;
		border-radius: 10rpx;
		margin-right: 20rpx;
	}

	.Week-style text {
		padding: 3rpx;
	}

	.Week-sup {
		width: 150rpx;
	}

	.period-view {
		background-color: #ffffff;
		padding: 20rpx;
		border-radius: 10rpx;
		margin: 20rpx;
	}

	.period-title {
		font-weight: bold;
		margin-bottom: 20rpx;
		display: block;
	}

	.Week-Down {
		width: 200rpx;
	}

	/* 选中加上样式 */
	.checkstyle {
		background-color: #2c76ef !important;
		color: #ffffff !important;
	}
</style>
