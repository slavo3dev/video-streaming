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

  const subButton =
    isSubscribed === "true" ? (
      <div className="md:mt-12 sm:ml-8 ">
        <div className="bg-green-600 hover:bg-green-700 text-white font-bold flex space-x-2 justify-center p-3 md:pt-4 md:text-2xl w-32 h-12 rounded-md md:rounded-2xl md:w-44 md:h-16">
          Subscribed
        </div>
      </div>
    ) : (
      <div className="md:mt-12 sm:ml-8">
        <Link
          className="bg-green-600 hover:bg-green-700 text-white font-bold flex space-x-2 justify-center p-3 md:pt-4 md:text-2xl w-32 h-12 rounded-md md:rounded-2xl md:w-44 md:h-16"
          href={paymentLink}
        >
          Subscribe
        </Link>
      </div>
    )

  return (
    <div>
      <div className="flex flex-row justify-between mt-20 mb-10 ">
        <div className="flex flex-row">
          <Image
            className=" w-14 h-14 md:w-36 md:h-full  rounded-full "
            width={36}
            height={36}
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=8"
            }
            alt={"Creator Image"}
          ></Image>

          <h1 className="text-black text-sm md:text-2xl font-bold pl-2 md:pl-6 pt-4 md:pt-12">
            {title}
          </h1>
        </div>
        <div>{subButton}</div>
      </div>
      <div className="text-base font-normal w-full  text-stone-400">
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
