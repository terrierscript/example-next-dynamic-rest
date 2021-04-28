import { Image, Box, Stack, Heading, HStack, Container } from "@chakra-ui/react"
import axios from "axios"
import { GetServerSideProps } from "next"
import React, { FC } from "react"
import { LoremIpsum } from "lorem-ipsum"
type Item = {
  name: string,
  description: string
  breed: string
  image: string
}

const ListPage: FC<{ items: Item[] }> = ({ items }) => {
  return <Stack gap={4} p={4}>
    {items.map(item => {
      return <Box rounded="base" shadow="base" p={4}>
        <HStack>
          <Box minWidth={100}>
            <Image boxSize={100} rounded="base" objectFit="cover" src={item.image} />
          </Box>
          <Stack>
            <Heading>{item.name}</Heading>
            <Box color="gray.500">{item.breed} terrier</Box>
            <Box>{item.description}</Box>
          </Stack>
        </HStack>
      </Box>
    })}
  </Stack>
}

const TilePage: FC<{ items: Item[] }> = () => {
  return <Stack>

  </Stack>
}

const DummyPageRouter: FC<{ items: Item[], query: string }> = ({ items, query }) => {
  return <Container>
    <ListPage items={items} />
  </Container>
}

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
const randomDogs = async (): Promise<Item[]> => {
  const lorem = new LoremIpsum()
  const breeds = [...Array(4)].map(() => {
    return randomTerrier()
  })
  return Promise.all(breeds.map(async breed => {
    const image = await axios(`https://dog.ceo/api/breed/terrier/${breed}/images/random`)
    return {
      name: lorem.generateWords(1),
      breed,
      image: image.data.message,
      description: lorem.generateParagraphs(1),
    }
  }))
}
export const getServerSideProps: GetServerSideProps = async () => {
  const dogs = await randomDogs()
  console.log(dogs)

  return {
    props: {
      items: dogs
    },
  }
}
export default DummyPageRouter