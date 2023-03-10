import { StaticImageData } from "next/image"

export type creatorCardProps = {
  name: string
  photo: string | StaticImageData
  link: string
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
  subscription: boolean
  setSubscription: (subscription: boolean) => void
}
export type CreatorType={
  state:string,
  name:string,
  image:string,
  paymentLink:string,
  video:string,
  photo:string,
  subscription: boolean,
}
export type getVideosType = (creator: string)=>{
imgUrl: string,
title: string,
id: string 
}[];
export type cardPropsType ={
  imgUrl:string,
  id:{},
  title:string
}
export type VideoType = {
  id: string
  imgUrl: string
  title: string
}