<template>
    <div>
        <!-- 公司logo -->
        <div class="box_top">
            <blur :blur-amount=40 :height=100 :url="url">
                <p class="center"><img v-if="url" :src="url"></p>
            </blur>
        </div>
        <!-- 搜索 -->
            <sticky>
                    <div class="search_header">
                        <div class="search_box" @click="searchBoxClick">
                            <icon type="search" class="icon"></icon>
                            <span class="search_span">搜索</span>
                            <!-- <input type="text" readonly class="search_input" placeholder="搜索"> -->
                        </div>
                        <div class="map_icon" @click="mapIconClick">
                            <img src="@/assets/map_icon.png">
                        </div>
                    </div>
                    <!-- 筛选条件 -->
                    <div class="filter_box">
                        <filter-bar
                            top="50"
                            :bar-menus="barMenus" 
                            @showDialog="handleShowDialog" 
                            @closeDialog="handleCloseDialog" 
                            @changeTab="handleChangeTab"
                            @changeMainItem="handleChangeMainItem" 
                            @changeSelect="changeData">
                        </filter-bar>
                    </div>
            </sticky>
        
        <!-- 列表 -->
        <div class="job_list">
            <group title="cell demo">
                <cell title="VUX" value="cool" :link="{ path: '/list' }" is-link></cell>
                <cell title="GEO" value="geo" :link="{ path: '/geolocation' }" is-link></cell>
                <cell title="pull-refresh" value="pull-refresh" :link="{ path: '/refresh' }" is-link></cell>
            </group>
            <group title="cell demo">
                <cell title="VUX" value="cool" :link="{ path: '/list' }" is-link></cell>
                <cell title="GEO" value="geo" :link="{ path: '/geolocation' }" is-link></cell>
                <cell title="pull-refresh" value="pull-refresh" :link="{ path: '/refresh' }" is-link></cell>
            </group>
            <group title="cell demo">
                <cell title="VUX" value="cool" :link="{ path: '/list' }" is-link></cell>
                <cell title="GEO" value="geo" :link="{ path: '/geolocation' }" is-link></cell>
                <cell title="pull-refresh" value="pull-refresh" :link="{ path: '/refresh' }" is-link></cell>
            </group>
            <group title="cell demo">
                <cell title="VUX" value="cool" :link="{ path: '/list' }" is-link></cell>
                <cell title="GEO" value="geo" :link="{ path: '/geolocation' }" is-link></cell>
                <cell title="pull-refresh" value="pull-refresh" :link="{ path: '/refresh' }" is-link></cell>
            </group>
            <group title="cell demo">
                <cell title="VUX" value="cool" :link="{ path: '/list' }" is-link></cell>
                <cell title="GEO" value="geo" :link="{ path: '/geolocation' }" is-link></cell>
                <cell title="pull-refresh" value="pull-refresh" :link="{ path: '/refresh' }" is-link></cell>
            </group>
            <group title="cell demo">
                <cell title="VUX" value="cool" :link="{ path: '/list' }" is-link></cell>
                <cell title="GEO" value="geo" :link="{ path: '/geolocation' }" is-link></cell>
                <cell title="pull-refresh" value="pull-refresh" :link="{ path: '/refresh' }" is-link></cell>
            </group>
        </div>
        <div>
            <SearchDialog :show-flag="showFlag" @hideSearchDialog="onHide"></SearchDialog>
        </div>
    </div>
</template>
<script>
import { Blur, Icon, Group, Cell, Sticky } from 'vux'
import { getCorpInfo } from '@/utils/auth'
import SearchDialog from '@/views/components/SearchDialog'
import FilterBar from '@/components/filter-bar/index'
import barMenus from '@/components/filter-bar/data'; 
export default {
    components: {
        Blur,
        Icon,
        Group,
        Cell,
        SearchDialog,
        Sticky,
        FilterBar
    },
    data () {
        return {
            url: '',
            showFlag: false,
            options: {},
            barMenus: barMenus
        }
    },
    created() {
        this.url = getCorpInfo().logoUrl
    },
    methods: {
        init (val) {

        },
        onHide(val) {
            this.showFlag = false
            this.options = Object.assign({}, val)
        },
        // 搜索框点击事件
        searchBoxClick(e) {
            console.log('searchBoxClick', e.target)
            this.showFlag = true
        },
        // 地图图标点击事件
        mapIconClick() {
            console.log('mapIconClick')
            this.$router.push({ path: '/list' })
        },
        handleShowDialog(v) {
          // console.log(v);
        },
        handleCloseDialog(v) {
          // console.log(v);
        },
        handleChangeTab(v) {
          // console.log(v);
        },
        handleChangeMainItem(v) {
          // console.log(v)
        },
        changeData(v) {
            console.log(v);
        }
    }
}
</script>
<style lang="less" scoped>
.box_top {
    .center {
        text-align: center;
        padding-top: 1.25rem;
        color: #fff;
        font-size: 1.125rem;
        img {
            width: 3.75rem;
            height: 3.75rem;
            border-radius: 50%;
            border: 2px solid #ececec;
        }
    }
}
// 搜索框
.search_header {
    text-align: center;
    position: relative;
    background: #fff;
    width: 100%;
    height: 3.125rem;
    .search_box {
        position: absolute;
        background: #f7f4f4;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: .625rem;
        padding-bottom: .1875rem; 
        top: .625rem; 
        left: .625rem;
        right: 3.125rem;
        text-align: center;
        height: 1.875rem;
        line-height: 1.875rem;
        .icon {
            padding: .125rem;
        }
        .search_span {
            color: #ccc; 
            font-size: .875rem;
        }
    }
    .map_icon {
        position: absolute;
        top: .625rem;
        right: .625rem;
        img {
            width: 1.875rem;
            height: 1.875rem;
            line-height: 1.875rem;
        }
    }
}
// list
.job_list {
    margin-top: 3.125rem;
}
</style>
