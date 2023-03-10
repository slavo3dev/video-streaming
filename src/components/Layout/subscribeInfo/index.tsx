import Image from "next/image"
import Link from "next/link"
import { CreatorContext } from "src/context"
import { FC, useContext } from "react"

export const Profile: FC = () => {
  const context = useContext(CreatorContext)
  const title = context.creator
  const paymentLink = context.payment
  const imgUrl = context.image
  const isSubscribed = context.subscription

  const subButton = isSubscribed ?
        <div className="mt-12 sm:ml-8 ">
          <h1 className="text-sky-500 text-2xl font-bold">{title}</h1>
          <div
            className="bg-sky-500 hover:bg-blue-700 text-white font-bold flex space-x-2 justify-center py-1 px-4 rounded-full w-44 active:bg-blue-800"
          >
            Subscribed
          </div>
          <div className="text-sky-500 text-2xl font-bold"></div>
        </div>
        :
        <div className="mt-12 sm:ml-8 ">
          <h1 className="text-sky-500 text-2xl font-bold">{title}</h1>
          <Link
            className="bg-sky-500 hover:bg-blue-700 text-white font-bold flex space-x-2 justify-center py-1 px-4 rounded-full w-44 active:bg-blue-800"
            href={paymentLink}
          >
            Subscribe
          </Link>
          <div className="text-sky-500 text-2xl font-bold"></div>
        </div>;

  

  return (
    <div>
      <div className="md:flex xl:flex 2xl:flex lg:flex mt-20 mb-10 ">
        <div>
          <Image
            className="w-36 h-36 rounded-full "
            width={36}
            height={36}
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=8"
            }
            alt={"Creator Image"}
          ></Image>
        </div>
          <div >{subButton}</div> 
      </div>
      <div className="text-base font-normal w-5/6 sm:w-96 text-stone-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  )
}
