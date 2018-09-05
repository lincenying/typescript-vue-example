import api from '@/api'
import { TopicsState, TopicItem } from '@/interface'

const state = {
    data: [],
    page: 1,
    path: ''
}

const actions = {
    async ['getTopics'](store: any, config: any) {
        if (!config.page) config.page = 1
        const {
            commit,
            state,
            rootState: {
                route: { fullPath }
            }
        } = store
        const path: string = fullPath
        if (state.data.length > 0 && path === state.path && config.page === 1) return
        const { data, success } = await api.get('topics', config)
        if (data && success) {
            commit('receiveTopics', {
                ...config,
                data,
                path
            })
        }
    }
}

const mutations = {
    ['receiveTopics'](state: TopicsState, payload: TopicsState) {
        const { data, page, path } = payload
        let list: Array<TopicItem> = []
        if (page === 1) {
            list = list.concat(data)
        } else {
            list = state.data.concat(data)
        }
        state.data = list
        state.page = page
        state.path = path
    }
}

const getters = {
    ['getTopics'](state: TopicsState) {
        return state
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
