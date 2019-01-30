import get from 'lodash.get'

export const sleep: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const oc = (props: any, property: string, def?: any): any => {
    return get(props, property, def)
}
