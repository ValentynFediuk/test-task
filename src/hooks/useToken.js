import { $api } from 'http'

export const useToken = async () => {
  try {
    const { data } = await $api.get('/token')
    return data.token
  } catch (error) {
    throw new Error(error)
  }
}
