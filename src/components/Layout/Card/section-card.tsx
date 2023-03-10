import { FC, useContext } from "react"
import { CreatorContext } from "src/context"
import { CreatorCard } from "./creator-card"
import { constants } from "lib/constants"

export const CardSection: FC = () => {
  const context = useContext(CreatorContext)
  const creators = Object.entries(constants)

  return (
    <>
      <div className="">
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-hidden overflow-y-hidden">
          {creators.map(([key, creator]) => (
            <div key={key}>
              <div
                className="w-full"
                onClick={() => {
                  context.setState(creator.state)
                  context.setCreator(creator.name)
                  context.setPayment(creator.paymentLink)
                  context.setImage(creator.image)
                  context.setSubscription(creator.subscription)
                }}
              >
                <CreatorCard
                  name={creator.name}
                  photo={creator.photo}
                  link={`/video/${creator.video}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}