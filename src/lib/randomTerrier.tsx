import axios from "axios"
import { LoremIpsum } from "lorem-ipsum"
import { Item } from "../pages/dogs/[[...paths]]"

const randomTerrier = () => {
  const terriers = ["american",
    "australian",
    "bedlington",
    "border",
    "dandie",
    "fox",
    "irish",
    "kerryblue",
    "lakeland",
    "norfolk",
    "norwich",
    "patterdale",
    "russell",
    "scottish",
    "sealyham",
    "silky",
    "tibetan",
    "toy",
    "westhighland",
    "wheaten",
    "yorkshire"
  ]
  return terriers[Math.ceil(Math.random() * terriers.length - 1)]
}
export const getRandomTerriers = async (): Promise<Item[]> => {
  const lorem = new LoremIpsum()
  const breeds = [...Array(8)].map(() => {
    return randomTerrier()
  })
  return Promise.all(breeds.map(async (breed) => {
    const image = await axios(`https://dog.ceo/api/breed/terrier/${breed}/images/random`)
    return {
      name: lorem.generateWords(1),
      breed,
      image: image.data.message,
      description: lorem.generateParagraphs(1),
    }
  }))
}
