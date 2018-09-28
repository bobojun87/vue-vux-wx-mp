import request from '@/utils/request'
import qs from 'qs'

// 获取公司信息
export function getCorpInfo() {
    return request({
        url: '/api/corp/getCorpInfo',
        method: 'post'
    })
}