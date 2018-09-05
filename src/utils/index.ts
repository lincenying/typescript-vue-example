export const sleep: any = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const oc = (props: any, property: string, def?: any): any => {
    if (!property || typeof property !== 'string') return props
    const arrProperty: string[] = property.split('.')
    const $return: any = arrProperty.reduce((prev, curr) => prev && prev[curr], props)
    return $return || def
}
