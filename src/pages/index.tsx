import { magic } from "lib/magic-client"
import { useContext, useEffect, useState } from "react"
import { Card, Login, Header, Footer, Spinner } from "src/components/index"
import { getVideos } from "lib/videos"
import Link from "next/link"
import { CreatorContext } from "src/context"
import { constants } from "lib/constants"
import type { VideoType } from "lib/types"


  const Homepage = ()=> {
  let subscribedVideos: VideoType[] = getVideos("creatorOne")
  let newVideos: VideoType[] = getVideos("creatorTwo")
  let popularVideos: VideoType[] = getVideos("creatorSeven")

  function handleSubscribedVideos() {
    context.setState(constants.creatorOne.state)
    context.setCreator(constants.creatorOne.name)
    context.setPayment(constants.creatorOne.paymentLink)
    context.setImage(constants.creatorOne.image)
    context.setSubscription(constants.creatorOne.subscription)
  }
  function handleNewVideos() {
    context.setState(constants.creatorTwo.state)
    context.setCreator(constants.creatorTwo.name)
    context.setPayment(constants.creatorTwo.paymentLink)
    context.setImage(constants.creatorTwo.image)
    context.setSubscription(constants.creatorTwo.subscription)
  }
  function handlePopularVideos() {
    context.setState(constants.creatorSeven.state)
    context.setCreator(constants.creatorSeven.name)
    context.setPayment(constants.creatorSeven.paymentLink)
    context.setImage(constants.creatorSeven.image)
    context.setSubscription(constants.creatorSeven.subscription)
  }
  const context = useContext(CreatorContext)
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

  let videoSection1 = (
    <div
      className="overflow-x-scroll w-screen flex flex-row"
      onClick={() => handleSubscribedVideos()}
    >
      {subscribedVideos.map(
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
  )

  let videoSection2 = (
    <div
      className="overflow-x-scroll w-screen flex flex-row"
      onClick={() => handleNewVideos()}
    >
      {newVideos.map(
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
  )

  let videoSection3 = (
    <div
      className="overflow-x-scroll w-screen flex flex-row"
      onClick={() => handlePopularVideos()}
    >
      {popularVideos.map(
        (
          video: {
            id: string
            imgUrl: string
            title: string
          },
          idx: {},
        ) => {
          return (
            <Link
              href={`/video/${video.id}`}
              key={video.id + Math.floor(Math.random() * Date.now())}
            >
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
  )
  let homePage = (
    <div className="flex flex-col min-h-screen w-full">
      <div className="lg:absolute lg:inset-y-0"></div>
      <Header />
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">
        Your Videos
      </h1>
      {videoSection1}
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">
        New Videos
      </h1>
      {videoSection2}
      <h1 className="text-4xl  pt-3 ml-6 font-bold text-blue-500">Other</h1>
      {videoSection3}
      <Footer />
    </div>
  )
  let LoginUser = (
    <div>
      <Login />{" "}
    </div>
  )
  let Spinning = <Spinner />

  return auth === "loading" ? Spinning : auth ? homePage : LoginUser
}
export default Homepage;