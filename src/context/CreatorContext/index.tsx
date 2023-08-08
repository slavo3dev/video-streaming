import { createContext } from "react"
import { creatorContextType } from "lib/types"

const CreatorContext = createContext<creatorContextType>({
  creator: "",
  setCreator: function (creator: string): void {
    throw new Error("Error")
  },
  state: "",
  setState: function (state: string): void {
    throw new Error("Error")
  },
  payment: "",
  setPayment: function (payment: string): void {
    throw new Error("Error")
  },
  image: "",
  setImage: function (image: string): void {
    throw new Error("error")
  },
  subscription: "",
  setSubscription: function (subscription: string): void {
    throw new Error("error")
  },
})

export default CreatorContext
