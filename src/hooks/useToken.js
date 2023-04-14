import { $api } from "../http/axios"

export const useToken = async () => {
    try {
        const {data} = await $api.get('/token')
        return data.token
    } catch (e) {
        console.error(e)
    }
}