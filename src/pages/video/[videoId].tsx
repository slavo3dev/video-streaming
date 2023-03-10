import { useRouter } from "next/router"
import { Card, Profile } from "src/components"
import { getVideos } from "lib/videos"
import  logo  from "public/FClogo.jpg"
import Link from "next/link"
import Image from "next/image"
import { CreatorContext } from "src/context"
import { useContext } from "react"

const Video = () => {
  const context = useContext<any>(CreatorContext)
  const selectVideos = context.state
  const creatorVideos = getVideos(selectVideos)
  const isSubscribed = context.subscription
  console.log(isSubscribed)

  const router = useRouter()
  {
    logo
  }
  let url = isSubscribed
    ? `https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=1&rel=0&disablekb=1&modestbranding=1`
    : `https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=0&rel=0&&disablekb=1&autoplay=1&modestbranding=1&start=10&end=23`

  return (
    <div className="w-full h-screen flex-col p-6 px-10 overflow-sroll">
      <div className="block ml-0 pr-2 lg:px-2 py-2 desktop-view">
        <Link href="/">
          <Image
            width={70}
            height={40}
            className="mr-2 overflow-hidden"
            src={logo}
            alt={"FC Logo"}
          ></Image>
        </Link>
      </div>
      <div
        className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold flex space-x-2 justify-center py-2 px-4 rounded-full w-24 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hover:shadow-lg focus:bg-blue-700 focus:shadow-lg"
        onClick={() => router.back()}
      >
        BACK
      </div>

      <div className="player flex left-10 right-10 w-full sm:h-4/6 outline-0 rounded-xl ">
        <iframe
          sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
          id="ytplayer"
          width="100%"
          height="100%"
          allowFullScreen
          allow="autoplay"
          src={url}
        ></iframe>
      </div>
      <div className="pb-8">
        <Profile />
      </div>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {creatorVideos.map(
          (
            video: {
              id: string 
              imgUrl: string
              title: string
            },
            idx: {},
          ) => {
            return (
              <Link href={`/video/${video.id}`} key={video.id + Math.random()}>
                <Card
                  id={idx}
                  key={video.id}
                  imgUrl={video.imgUrl}
                  title={video.title}
                />
              </Link>
            )
          },
        )}
      </div>
    </div>
  )
}
export default Video