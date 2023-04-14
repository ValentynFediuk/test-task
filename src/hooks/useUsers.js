import { useToken } from "./useToken"
import { $api } from "../http/axios"

export const useUsers = async (userPage) => {
    try {
        const token = await useToken()
        const {data} = await $api.get(`/users?page=${userPage}&count=6`, {headers: `Bearer ${token}`})
        return data
    } catch (e) {
        console.error(e)
    }
}