import { getCorpInfo } from '@/api/company'
import {
    setCorpInfo
} from '@/utils/auth'

const company = {

    state: {
        corpInfo: '',
    },

    mutations: {
        SET_CORPINFO(state, corpInfo) {
            state.corpInfo = corpInfo;
        },
    },

    actions: {
        // 获取公司信息
        CorpInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getCorpInfo().then(res => {
                    setCorpInfo(res.data[0])
                    commit("SET_CORPINFO", res.data[0])
                    resolve(res.data[0])
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }

}

export default company;