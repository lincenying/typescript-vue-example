export interface getTopicConfig {
    id: number
}

export interface TopicItem {
    id: string
    title: string
    [propName: string]: any
}

export interface TopicsState {
    data: Array<TopicItem>
    page: number
    path: string
}

export interface TopicState {
    data: TopicItem
    path: string
}

export interface State {
    topics: TopicsState
    topic: TopicState
}
