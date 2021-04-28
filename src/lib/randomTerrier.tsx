import axios from "axios"
import { LoremIpsum } from "lorem-ipsum"
import { Item } from "../pages/terriers/[[...paths]]"

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

export const getTerriers = () => {
  return [
    {
      name: 'dolore',
      breed: 'toy',
      image: 'https://images.dog.ceo/breeds/terrier-toy/n02087046_3923.jpg',
      description: 'Aliqua elit amet consectetur aliquip amet et mollit aliquip dolor reprehenderit. Aute magna Lorem anim fugiat consequat esse reprehenderit cupidatat ullamco consequat amet ad aliquip deserunt. Aliquip cupidatat occaecat duis excepteur. Ad nostrud anim qui in id.'
    },
    {
      name: 'nostrud',
      breed: 'wheaten',
      image: 'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_403.jpg',
      description: 'Reprehenderit nostrud consequat irure Lorem non consequat cillum. Culpa commodo id culpa Lorem dolore. Nostrud aliqua voluptate reprehenderit officia mollit ex Lorem nisi.'
    },
    {
      name: 'do',
      breed: 'scottish',
      image: 'https://images.dog.ceo/breeds/terrier-scottish/n02097298_1410.jpg',
      description: 'Eiusmod in deserunt ullamco culpa proident anim id. Eu dolor aliqua qui nostrud ullamco in est. Proident magna qui do amet ipsum reprehenderit. Aliqua Lorem minim ullamco deserunt nostrud eiusmod. Aliquip tempor est velit veniam.'
    },
    {
      name: 'sint',
      breed: 'norfolk',
      image: 'https://images.dog.ceo/breeds/terrier-norfolk/n02094114_4611.jpg',
      description: 'Reprehenderit incididunt ullamco ipsum tempor veniam do sit. Aliqua magna magna dolore ipsum tempor enim consectetur. Eiusmod elit cupidatat consequat mollit est deserunt sint culpa enim consectetur laboris. Incididunt minim irure aliquip qui ad sunt incididunt et aute irure labore. Aliquip cillum est commodo quis cupidatat excepteur minim proident. Et et aute laborum cillum.'
    },
    {
      name: 'nulla',
      breed: 'patterdale',
      image: 'https://images.dog.ceo/breeds/terrier-patterdale/patterdale-terrier-287612805105275kBT.jpg',
      description: 'Qui incididunt duis culpa cupidatat et ea. Commodo ea mollit mollit sint. Ullamco aute laboris ullamco in. Dolore aute occaecat consectetur pariatur dolore dolore in consectetur ad. Culpa ullamco dolore voluptate sunt excepteur eu aliquip aliqua non.'
    },
    {
      name: 'quis',
      breed: 'dandie',
      image: 'https://images.dog.ceo/breeds/terrier-dandie/n02096437_148.jpg',
      description: 'Esse culpa ad labore laboris fugiat. Cillum ipsum enim velit enim deserunt. Et ut commodo cillum cupidatat dolore. Commodo amet eu tempor ad duis excepteur nostrud. Tempor culpa nisi sunt ut non dolor non nulla amet labore. Nulla et voluptate et laborum et aute consectetur pariatur et fugiat velit elit.'
    },
    {
      name: 'cupidatat',
      breed: 'fox',
      image: 'https://images.dog.ceo/breeds/terrier-fox/n02095314_1536.jpg',
      description: 'Officia veniam adipisicing tempor nisi eu deserunt mollit excepteur aliquip velit. Sit tempor magna consectetur commodo amet. Eu culpa ea pariatur ut. Ullamco eu nulla nostrud veniam eu laboris quis. Non aliqua do qui commodo aliqua consequat consectetur eu do nostrud. Consectetur mollit tempor labore est consectetur cupidatat esse.'
    },
    {
      name: 'sint',
      breed: 'westhighland',
      image: 'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_1213.jpg',
      description: 'Anim quis excepteur et magna laborum ad nisi exercitation amet ad exercitation cillum. Eu non occaecat occaecat veniam quis ad. Adipisicing in nostrud elit non sunt ea quis eiusmod dolore. Aute sit culpa ex ea laborum duis quis laboris quis. Sit do dolore est minim qui ea ex ullamco Lorem ex deserunt dolore est.'
    }
  ]
}