import "src/styles/globals.css"
import type { AppProps } from "next/app"
import { useState, useEffect } from "react"
import { CreatorContext } from "src/context"
import { Layout } from "src/components"

function useLocalStorageState(key: string, defaultValue: any) {
  const [stateLocal, setStateLocal] = useState(() => {
    if (typeof window !== "undefined") {
      const storedState = localStorage.getItem(key)
      return storedState || defaultValue
    }
    return defaultValue
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, stateLocal)
    }
  }, [key, stateLocal])

  return [stateLocal, setStateLocal]
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [creator, setCreator] = useLocalStorageState(
    "creator",
    "Full Send Podcast",
  )
  const [state, setState] = useLocalStorageState("state", "creatorOne")
  const [payment, setPayment] = useLocalStorageState(
    "payment",
    "https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf",
  )
  const [image, setImage] = useLocalStorageState(
    "image",
    "https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj",
  )
  const [subscription, setSubscription] = useLocalStorageState(
    "subscription",
    "false",
  )

  return (
    <CreatorContext.Provider
      value={{
        creator,
        setCreator,
        payment,
        setPayment,
        image,
        setImage,
        state,
        setState,
        subscription,
        setSubscription,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CreatorContext.Provider>
  )
}
