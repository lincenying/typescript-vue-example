import api from '@/api'
import { TopicItem } from './topics'

export interface TopicState {
    data: TopicItem
    path: string
}

const state = {
    data: {},
    path: ''
}

interface getTopicConfig {
    id: number
}

const actions = {
    async ['getTopic'](store: any, config: getTopicConfig) {
        const {
            commit,
            state,
            rootState: {
                route: { fullPath }
            }
        } = store
        const path: string = fullPath
        if (state.data.id && path === state.path) return
        const { data, success } = await api.get(`topic/${config.id}`)
        if (data && success) {
            commit('receiveTopic', {
                data,
                path
            })
        }
    }
}

const mutations = {
    ['receiveTopic'](state: TopicState, payload: TopicState) {
        const { data, path } = payload
        state.data = data
        state.path = path
    }
}

const getters = {
    ['getTopic'](state: any) {
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
