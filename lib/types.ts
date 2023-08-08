import { StaticImageData } from "next/image"

export type creatorCardProps = {
  name: string
  photo: string | StaticImageData
  link: string
  avatar: string | StaticImageData
}
export type creatorContextType = {
  creator: string
  setCreator: (creator: string) => void
  state: string
  setState: (state: string) => void
  payment: string
  setPayment: (payment: string) => void
  image: string
  setImage: (image: string) => void
  subscription: any
  setSubscription: (subscription: string) => void
}
export type CreatorType = {
  state: string
  name: string
  image: string
  paymentLink: string
  video: string
  photo: StaticImageData
  subscription: string
}
export type getVideosType = (creator: string) => {
  imgUrl: string
  title: string
  id: string
  channelName: string
  stateName: string
  imgCreator: string
}[]
export type cardPropsType = {
  imgUrl: string
  id: {}
  title: string
  name: string
}
export type VideoType = {
  id: string
  imgUrl: string
  title: string
  channelName: string
  stateName: string
  imgCreator: string
}
export interface Data {
  [key: string]: {
    active: boolean
    creatorOne: {
      active: boolean
      items: {
        kind: string
        etag: string
        id: {
          kind: string
          videoId: string
        }
        snippet: {
          imgCreator: string
          publishedAt: string
          channelId: string
          title: string
          description: string
          thumbnails: string
          channelTitle: string
          liveBroadcastContent: string
          publishTime: string
        }
      }[]
    }
  }
}
