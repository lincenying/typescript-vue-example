export const sleep: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const oc = (props: any, property: string, def?: any): any => {
    // 如果props不是对象, 则直接返回原值
    if (Object.prototype.toString.call(props) !== '[object Object]') return props
    // 如果property不是字符串, 则直接返回原值
    if (!property || typeof property !== 'string') return props
    const arrProperty: string[] = property.split('.')
    const $return: any = arrProperty.reduce((prev, curr) => {
        if (prev === null || prev === undefined) return
        if (Object.prototype.toString.call(prev) === '[object Object]') return prev[curr]
    }, props)
    return def && $return === undefined ? def : $return
}
