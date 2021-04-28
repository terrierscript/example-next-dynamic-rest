import { Image, Box, Stack, Heading, HStack, Container, Center, SimpleGrid, VStack } from "@chakra-ui/react"
import { GetServerSideProps } from "next"
import React, { FC } from "react"
import { getRandomTerriers } from "../../lib/randomTerrier"
export type Item = {
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

const TilePage: FC<{ items: Item[] }> = ({ items }) => {
  return <SimpleGrid columns={2} gap={4} p={4}>
    {items.map(item => {
      return <Box rounded="base" shadow="base" p={4}>
        <VStack>
          <Box minWidth={200}>
            <Image boxSize={200} rounded="base" objectFit="cover" src={item.image} />
          </Box>
          <Stack>
            <Heading>{item.name}</Heading>
            <Box color="gray.500">{item.breed} terrier</Box>
          </Stack>
        </VStack>
      </Box>
    })}
  </SimpleGrid>
}

const Layout: FC<{}> = ({ children }) => {
  return <Container>
    <Stack>
      <Center>
        <Heading>Pretty Terriers</Heading>
      </Center>
      {children}
    </Stack>
  </Container>
}

const DummyRouter: FC<{ items: Item[], paths: string[] }> = ({ items, paths }) => {
  switch (paths[0]) {
    case "tile":
      return <TilePage items={items} />
    case "list":
    default:
      return <ListPage items={items} />
  }
}

const Page = (props) => {
  return <Layout>
    <DummyRouter {...props} />
  </Layout>
}


export const getServerSideProps: GetServerSideProps = async (req) => {
  const query = req.query
  const dogs = await getRandomTerriers()

  return {
    props: {
      items: dogs,
      paths: query.paths
    },
  }
}
export default Page