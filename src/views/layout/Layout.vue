<template>
    <div>
        <div class="container">
            <transition>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        
        
        <tabbar style="position:fixed"> 
            <tabbar-item :selected="$route.name === 'Home'" link="Home">
                <img slot="icon" src="@/assets/home.png">
				<img slot="icon-active" src="@/assets/home_active.png">
                <span slot="label">热招职位</span>
            </tabbar-item>
            <tabbar-item :selected="$route.name === 'List'" link="List">
                <img slot="icon" src="@/assets/company.png">
				<img slot="icon-active" src="@/assets/company_active.png">
                <span slot="label">公司简介</span>
            </tabbar-item>
            <tabbar-item :selected="$route.name === 'Geolocation'" link="Geolocation"> 
                <img slot="icon" src="@/assets/user.png">
				<img slot="icon-active" src="@/assets/user_active.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>

import { Tabbar, TabbarItem, Loading }from 'vux'
export default {
    components: {
        Tabbar,
        TabbarItem,
        Loading
    },
    data() {
        return {
            companyInfo: {}
        }
    },
    created(){
        // this.getCompanyInfoData()
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.container {
    margin-bottom: 3.3125rem;
}
</style>
