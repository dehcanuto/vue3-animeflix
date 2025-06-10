import api from './api'
import { type IAnimeResponse } from '@/models/anime'

export async function getTrending(): Promise<IAnimeResponse[]> {
  return await api.get('/trending/anime?limit=20').then((response) => {
    return response.data.data
  })
}
