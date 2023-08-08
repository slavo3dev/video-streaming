import { useRouter } from "next/router"

import { Card, Login, Profile, Spinner } from "src/components"
import { getVideos } from "lib/videos"
import logo from "public/FClogo.jpg"
import Link from "next/link"
import { CreatorContext } from "src/context"
import { useContext, useEffect, useState } from "react"
import { Header } from "src/components"
import { magic } from "lib/magic-client"

const Video = () => {
  const [auth, setAuth] = useState<string | boolean>("loading")

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn()
      if (isLoggedIn) {
        setAuth(true)
      } else {
        setAuth(false)
      }
    }
    handleLoggedIn()
  }, [auth])

  const context = useContext<any>(CreatorContext)
  const selectVideos = context.state
  const creatorVideos = getVideos(selectVideos)
  const isSubscribed = context.subscription

  const router = useRouter()
  {
    logo
  }
  let url =
    isSubscribed === "true"
      ? `https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=1&rel=0&disablekb=1&modestbranding=1`
      : `https://www.youtube.com/embed/${router.query.videoId}?origin=http://example.com&controls=0&rel=0&&disablekb=1&autoplay=1&modestbranding=1&start=10&end=23`
  let previewTitle = isSubscribed === "true" ? <div></div> : <div>Prewiew</div>
  let VideoPage = (
    <>
      <Header />

      <div className="w-full h-screen flex-col py-16 md:py-12 overflow-sroll">
        <h1 className="text-xl font-bold pl-8">{previewTitle}</h1>
        <div className="player justify-center rounded-2xl md:h-4/6 overflow-hidden flex w-full  outline-0  ">
          <iframe
            sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
            id="ytplayer"
            width="80%"
            height=""
            allowFullScreen
            allow="autoplay"
            src={url}
          ></iframe>
        </div>
        <div className="pb-8 justify-center p-4 md:p-12 ">
          <Profile />
        </div>
        <h1 className="text-xl font-bold pl-8">Related Videos</h1>
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {creatorVideos.map(
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
      </div>
    </>
  )
  let LoginUser = (
    <div>
      <Login />{" "}
    </div>
  )
  let Spinning = <Spinner />
  return auth === "loading" ? Spinning : auth ? VideoPage : LoginUser
}
export default Video
