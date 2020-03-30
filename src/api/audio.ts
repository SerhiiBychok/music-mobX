import { fetcher } from 'data-fetcher'

export interface IGetAudioRequest {
  platform?: string
  offset: number
  q?: string
}

export enum Platform {
  VK = 'VK',
  ZV = 'ZV',
  GM = 'GM'
}

interface IArtist {
  id: number
  artistName: string
  photos: Array<any>
}

export interface IAudioResponse {
  id: string
  artistName: string
  title: string
  duration: number
  bitrate: number
  playCount: number
  fromPlatform: Platform
  externalId: string
  createdAt: Date
  updatedAt: Date
  genreName: string
  artists: Array<IArtist>
}

export function getAudio(
  params: IGetAudioRequest
): Promise<Array<IAudioResponse>> {
  const { platform = 'all', offset, q } = params
  return fetcher(
    '/audios',
    {
      method: 'GET',
      query: {
        platform,
        offset,
        limit: 20,
        q
      }
    },
    false
  )
}

export function getAudioPlay(params: any) {
  const { platform, id } = params
  return fetcher(
    `/audios/${id}/play`,
    {
      method: 'GET',
      mode: 'no-cors',
      query: {
        platform
      }
    },
    false
  )
}
