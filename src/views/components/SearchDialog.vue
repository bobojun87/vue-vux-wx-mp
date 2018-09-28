<template>
    <div>
        <div v-transfer-dom>
            <popup 
                v-model="show" 
                @on-hide="log('hide')" 
                @on-show="log('show')" 
                height="100%"
                position="top">
                <div class="popup0">
                    <!-- search -->
                    <div class="search_header">
                        <div class="search_box">
                            <icon type="search" class="icon"></icon>
                            <div class="search_input">
                                <input type="search" placeholder="搜索">
                            </div>
                        </div>
                        <div class="search_cancel" @click="onCancel">
                            <span>取消</span>
                        </div>
                    </div>
                    <div class="search_select">
                        <flexbox>
                            <flexbox-item>
                                <div class="flex-item" @click="selectItemClick">
                                    <span>1</span>
                                    <img :src="selectIcon">
                                </div>
                            </flexbox-item>
                            <flexbox-item>
                                <div class="flex-item">2</div>
                            </flexbox-item>
                            <flexbox-item>
                                <div class="flex-item">3</div>
                            </flexbox-item>
                            <flexbox-item>
                                <div class="flex-item">4</div>
                            </flexbox-item>
                        </flexbox>
                    </div>
                    <div>
                        <group title="default">
                            <radio :options="radio001" @on-change="radioValueChange"></radio>
                        </group>
                    </div>
                    <group>
                        <x-switch title="Another XSwitcher" v-model="show"></x-switch>
                        <x-switch title="Show Toast" v-model="showToast"></x-switch>
                    </group>
                </div>
            </popup>
        </div>
    </div>
</template>
<script>
import { Search, TransferDom, Popup, Group, Cell, XButton, XSwitch, Icon, Flexbox, FlexboxItem, Radio } from 'vux'
import Up from '@/assets/up.png'
import Down from '@/assets/down.png'
export default {
    directives: {
        TransferDom
    },
    components: {
        Search,
        Popup, 
        Group, 
        Cell, 
        XButton, 
        XSwitch,
        Icon,
        Flexbox, 
        FlexboxItem,
        Radio
    },
    props: {
        showFlag: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        showFlag: {
            deep: true,
            handler(val) {
                this.show = val
                this.init()
            }
        }
    },
    data () {
        return {
            results: [],
            value: 'test',
            show: false,
            showToast: false,
            selectIcon: Up,
            radio001: [ 'China', 'Japan' ]
        }
    },
    created() {
        console.log("created")
        this.init()
    },
    methods: {
        init() {
            console.log('init')
            this.getSelectorList()
        },
        // 获取下拉选项数据
        getSelectorList() {
            console.log('getSelectorList')
        },
        log (str) {
            console.log(str)
            if (str === 'hide') {
                let options = {
                    show: false,
                    list: [1, 2, 3],
                    data: {
                        a: '1',
                        b: 'b'
                    }
                }
                this.$emit('hideSearchDialog', options)
            }
        },
        onSubmit () {
            this.$refs.search.setBlur()
            this.$vux.toast.show({
                type: 'text',
                position: 'top',
                text: 'on submit'
            })
        },
        onCancel () {
            console.log('on cancel')
            this.show = false
        },
        selectItemClick () {
            this.selectIcon = Down
        },
        radioValueChange(value, label) {
            console.log('radioValueChange', value, label)
        }
    }
}
</script>
<style lang="less" scoped>
.search_header {
    text-align: center;
    position: relative;
    background: #fff;
    width: 100%;
    height: 3.125rem;
    .search_box {
        position: absolute;
        background: #fff;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: .625rem;
        padding-bottom: .1875rem; 
        top: .625rem; 
        left: .625rem;
        right: 3.125rem;
        text-align: left;
        height: 1.875rem;
        line-height: 1.875rem;
        .icon {
            padding: .1875rem;
        }
        .search_input {
            display: inline-block;
            position: absolute;
            top: 0;
            left: 1.75rem;
            right: .625rem;
            input {
                width: 100%;
                font-size: .875rem;
                border: none;
                outline: none;
                height:1.875rem;
                line-height: 1.875rem;
            }
        }
    }
    .search_cancel {
        position: absolute;
        top: .9375rem;
        right: .3125rem;
        span {
            padding: .1875rem .3125rem;
            color: #ddb74d;
        }
    }
}
.search_select {
    background: #fff;
    height: 2.1875rem;
    line-height: 2.1875rem;
    .flex-item {
        text-align: center;
    }
}
</style>
