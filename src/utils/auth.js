const TokenKey = 'Apply-Token'
const corpInfo = 'corpInfo'

export function getToken() {
    return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
    return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
    return sessionStorage.removeItem(TokenKey)
}

export function getCorpInfo() {
    let cInfoParse = JSON.parse(sessionStorage.getItem(corpInfo))
    return cInfoParse
}

export function setCorpInfo(cInfo) {
    let cInfoParse = JSON.stringify(cInfo)
    return sessionStorage.setItem(corpInfo, cInfoParse)
}

export function removeCorpInfo() {
    return sessionStorage.removeItem(corpInfo)
}