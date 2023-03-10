import data from "data/data-videos.json"
import type { getVideosType } from "./types"
interface ObjectVideoType {
  creatorOne: {
    items: []
  }
}



export const getVideos: getVideosType = (creator: string) => {
  let creatorType = creator ? creator : "creatorFour"
  console.log("Creator: ", creator)
  return data[creatorType as keyof ObjectVideoType].items.map(
    (item: {
      id: any
      snippet: { thumbnails: { high: { url: string } }; title: string }
    }) => {
      //maping through data in order to acces same values for every object in array
      return {
        imgUrl: item.snippet.thumbnails.high.url,
        title: item.snippet.title,
        id: item.id.videoId ,
      }
    },
  )
}