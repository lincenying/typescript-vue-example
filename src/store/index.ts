import Vue from 'vue'
import Vuex from 'vuex'
import topics, { TopicsState } from './modules/topics'
import topic, { TopicState } from './modules/topic'

export interface State {
    topics: TopicsState
    topic: TopicState
}

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        topics,
        topic
    }
})
