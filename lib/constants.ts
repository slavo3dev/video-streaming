import { CreatorType } from "./types"

interface Constants {
  creatorOne: CreatorType
  creatorTwo: CreatorType
  creatorThree: CreatorType
  creatorFour: CreatorType
  creatorFive: CreatorType
  creatorSix: CreatorType
  creatorSeven: CreatorType
  creatorEight: CreatorType
}

export const constants: Constants = {
  creatorOne: {
    state: "creatorOne",
    name: "Full Send",
    image:
      "https://yt3.googleusercontent.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s900-c-k-c0x00ffffff-no-rj",
    paymentLink: "https://buy.stripe.com/test_9AQbLbdhD8Y5eYM3cf",
    video: "PXPoKLPiSBM",
    photo: "/../public/fullSendHd.jpg",
    subscription: true,
  },
  creatorTwo: {
    state: "creatorTwo",
    name: "David Dobrik",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJULlbEP4MO2qjUSF3X8op4Errek_FlWpoXfbZfRmA=s176-c-k-c0x00ffffff-no-rj",
    paymentLink: "https://buy.stripe.com/test_9AQbLb4L7del4k89AC",
    video: "cl4Fv61rBxw",
    photo: "/../public/davidIcon.jpeg",
    subscription: false,
  },
  creatorThree: {
    state: "creatorThree",
    name: "Charles Leclerc",
    image:
      "https://yt3.ggpht.com/84C9HDPd3LR0C4M7tPqYmd6WvOCNFqVrXKyhDcxpyiuqmraVlNJp_tMWIijr6DI6YFLwOxjPNvo=s176-c-k-c0x00ffffff-no-rj-mo",
    paymentLink: "https://buy.stripe.com/test_6oE8yZ0uRcahg2Q5kp",
    video: "3fK7HS-dEFg",
    photo: "/../public/charles.jpeg",
    subscription: true,
  },
  creatorFour: {
    state: "creatorFour",
    name: "Full Send MMA",
    image:
      "https://yt3.googleusercontent.com/DVtnT7dhsBtGqPYzmzTocgRsGe3Obf86n_hN2aq4zPZNk62tM13Y2CdK0eDe6UKaZwh_teR775c=s900-c-k-c0x00ffffff-no-rj",
    paymentLink: "https://buy.stripe.com/test_eVa2aB7Xj4HPg2Q6ou",
    video: "aZYKKmZuy7I",
    photo: "/../public/mma.png",
    subscription: false,
  },
  creatorFive: {
    state: "creatorFive",
    name: "Rich Roll",
    image:
      "https://yt3.googleusercontent.com/UXI7ZyoQPoHhboBBUD8pscuva2dd-hlTxMjRDHVg96eoHOfiru5CFoWvkVe8pFiyvlB33_ceow=s176-c-k-c0x00ffffff-no-rj",
    paymentLink: "https://buy.stripe.com/test_28obLb4L74HP03S7sA",
    video: "qLta9C3gekk",
    photo: "/../public/rich.jpeg",
    subscription: false,
  },
  creatorSix: {
    state: "creatorSix",
    name: "TED Talk",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJWBWUFdKzV57BCapp3zkk8ICiMB7fugor0iSHJ4-g=s176-c-k-c0x00ffffff-no-rj",
    paymentLink: "https://buy.stripe.com/test_3csaH7elH2zH3g4cMV",
    video: "p3BJriWAJRw",
    photo: "/../public/ted.jpeg",
    subscription: false,
  },
  creatorSeven: {
    state: "creatorSeven",
    name: "PowerfulJRE",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJXxw6Z2O6R2LSeCbDFhcBITwJiVxR7-tFOW663eXg=s176-c-k-c0x00ffffff-no-rj",
    paymentLink: "https://buy.stripe.com/test_28o2aB2CZ6PX9EsfZ8",
    video: "Li-DZXySJQE",
    photo: "/../public/rogan.jpg",
    subscription: false,
  },
  creatorEight: {
    state: "creatorEight",
    name: "Lex Fridman",
    image:
      "https://yt3.googleusercontent.com/ytc/AL5GRJUDA5espVSAMXGuG8dAWDJJy_yb7RDQYw168-P_beA=s176-c-k-c0x00ffffff-no-rj",
    paymentLink: "https://buy.stripe.com/test_6oE3eFelH8Y5g2Q00b",
    video: "x4nT1wEwy1Y",
    photo: "/../public/lex.jpeg",
    subscription: false,
  },
}
