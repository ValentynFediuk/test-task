import { $api } from 'http'
import { useToken } from './useToken'

export const useUsers = async (userPage) => {
  try {
    const token = await useToken()
    const { data } = await $api.get(`/users?page=${userPage}&count=6`, {
      headers: `Bearer ${token}`,
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}
