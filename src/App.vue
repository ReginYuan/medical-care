<script setup lang="ts">
	import {
		onLaunch,
		onShow,
		onHide
	} from "@dcloudio/uni-app";
	onLaunch(() => {
		let get_Menu = uni.getStorageSync('MenuButton')
		if (!get_Menu) {
			const res = uni.getMenuButtonBoundingClientRect()
			uni.setStorageSync('MenuButton', res) //存
		}


	});
</script>
<style></style>
