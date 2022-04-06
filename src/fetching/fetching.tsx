

export const getJobs = async(rawText?:boolean):Promise<any|undefined> => {
    const baseURL = 'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json'

    const result = await fetch(baseURL)

    if(result.status === 200) {
        const text = await result.text()
        return rawText ? text : JSON.parse(text) as JobylonJob[]
    } else {
        throw new Error(result.status + ':' + result.statusText)
    }

}