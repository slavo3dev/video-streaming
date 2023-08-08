import { Data, VideoType } from "./types"
import { getVideos } from "./videos"
import { useContext } from "react"
import { CreatorContext } from "src/context"
import { constants } from "./constants"
import Link from "next/link"
import { Card } from "src/components"

const data: Data = require("data/data-videos.json")

const subscribedVideos = (): VideoType[] => {
  let activeVideos: VideoType[] = []

  const activeCreators = Object.keys(data).filter(
    (creator) => data[creator].active,
  )
  const activeCreatorVideos = activeCreators
    .map((creator) => getVideos(creator))
    .flat()
  activeVideos.push(...activeCreatorVideos)

  for (let i = activeVideos.length - 1; i > 0; i--) {
    const mix = Math.floor(Math.random() * (i + 1))
    const temp = activeVideos[i]
    activeVideos[i] = activeVideos[mix]
    activeVideos[mix] = temp
  }
  return activeVideos
}

const NotSubscribedVideos = (): VideoType[] => {
  let notActiveVideos: VideoType[] = []

  const NotActiveCreators = Object.keys(data).filter(
    (creator) => data[creator].active != true,
  )

  const NotActiveCreatorVideos = NotActiveCreators.map((creator) =>
    getVideos(creator),
  ).flat()
  notActiveVideos.push(...NotActiveCreatorVideos)

  for (let i = notActiveVideos.length - 1; i > 0; i--) {
    const mix = Math.floor(Math.random() * (i + 1))
    const temp = notActiveVideos[i]
    notActiveVideos[i] = notActiveVideos[mix]
    notActiveVideos[mix] = temp
  }
  return notActiveVideos
}

export const SubscribedSectionLine = () => {
  const context = useContext(CreatorContext)

  function subscribedContent(Creator: string, Images: string, State: string) {
    context.setCreator(Creator)
    context.setImage(Images)
    context.setSubscription("true")
    context.setState(State)
  }

  return (
    <div className="overflow-x-scroll w-screen flex flex-row">
      {subscribedVideos().map(
        (
          video: {
            id: string
            imgUrl: string
            title: string
            channelName: string
            stateName: string
            imgCreator: string
          },
          idx: {},
        ) => {
          return (
            <Link
              onClick={() =>
                subscribedContent(
                  video.channelName,
                  video.imgCreator,
                  video.stateName,
                )
              }
              href={`/video/${video.id}`}
              key={video.id + Math.random()}
            >
              <Card
                id={idx}
                key={video.id}
                imgUrl={video.imgUrl}
                title={video.title}
                name={video.channelName}
              />
            </Link>
          )
        },
      )}
    </div>
  )
}

export const Category1SectionLine = () => {
  const context = useContext(CreatorContext)

  function notSubscribedContent(
    Creator: string,
    Images: string,
    State: string,
  ) {
    context.setCreator(Creator)
    context.setImage(Images)
    context.setSubscription("false")
    context.setState(State)
  }

  return (
    <div className="overflow-x-scroll w-screen  flex flex-row">
      {NotSubscribedVideos().map(
        (
          video: {
            id: string
            imgUrl: string
            title: string
            channelName: string
            stateName: string
            imgCreator: string
          },
          idx: {},
        ) => {
          return (
            <Link
              onClick={() =>
                notSubscribedContent(
                  video.channelName,
                  video.imgCreator,
                  video.stateName,
                )
              }
              href={`/video/${video.id}`}
              key={video.id + Math.random()}
            >
              <Card
                id={idx}
                key={video.id}
                imgUrl={video.imgUrl}
                title={video.title}
                name={video.channelName}
              />
            </Link>
          )
        },
      )}
    </div>
  )
}

export const Category2SectionLine = () => {
  let notSubscribedVideos: VideoType[] = getVideos("creatorSeven")
  function category2Content() {
    context.setState(constants.creatorSeven.state)
    context.setCreator(constants.creatorSeven.name)
    context.setPayment(constants.creatorSeven.paymentLink)
    context.setImage(constants.creatorSeven.image)
    context.setSubscription(constants.creatorSeven.subscription)
  }
  const context = useContext(CreatorContext)
  return (
    <div className="overflow-x-scroll w-screen  flex flex-row">
      {notSubscribedVideos.map(
        (
          video: {
            id: string
            imgUrl: string
            title: string
            channelName: string
          },
          idx: {},
        ) => {
          return (
            <Link
              onClick={() => category2Content()}
              href={`/video/${video.id}`}
              key={video.id + Math.floor(Math.random() * Date.now())}
            >
              <Card
                id={idx}
                key={video.id}
                imgUrl={video.imgUrl}
                title={video.title}
                name={video.channelName}
              />
            </Link>
          )
        },
      )}
    </div>
  )
}
