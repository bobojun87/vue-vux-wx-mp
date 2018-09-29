<template>
	<div>
		<v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
			<ul>
				<li v-for="(item,index) in listdata" :key="'a' + index">{{item.name}}</li>
				<li v-for="(item,index) in downdata" :key="'b' + index">{{item.name}}</li>
			</ul>
		</v-scroll>
	</div>
</template>
<style lang="less">
	ul li {
		min-height: 6.25rem;
		line-height: 6.25rem;
		text-align: center;
		border-bottom: 1px solid #ccc;
		&:first-child {
			border-top: 1px solid #ccc;
		}
	}
</style>
<script>
import vScroll from "./components"
	export default {
		components: {
			// 'v-scroll': require("./components")
			vScroll
		},
		data() {
			
			return {
				counter: 1, //当前页
				num: 10, // 一页显示多少条
				pageStart: 0, // 开始页数
				pageEnd: 0, // 结束页数
				listdata: [], // 下拉更新数据存放数组
				downdata: [], // 上拉更多的数据存放数组
				scrollData:{
					noFlag: false //暂无更多数据显示
				}
			}
		},
		mounted: function() {
			this.getList();
		},
		methods: {
			getList() {
				var response = []
				for(let i = 0; i < 60; i++) {
					response.push({
						name: i
					})
				}
				this.listdata = response.slice(0, this.num);
			},
			onRefresh(done) {
				this.getList();

				done(); // call done

			},
			onInfinite(done) {
				this.counter++;
				let end = this.pageEnd = this.num * this.counter;
				let i = this.pageStart = this.pageEnd - this.num;

				let more = this.$el.querySelector('.load-more')
				for(i; i < end; i++) {
					if(i >= 30) {
						more.style.display = 'none'; //隐藏加载条

						//走完数据调用方法
						this.scrollData.noFlag = true;

						break;
					} else {
						this.downdata.push({
							name: i + "==="
						})
						more.style.display = 'none'; //隐藏加载条
					}
				}

				done();
			}
		}

	}
</script>