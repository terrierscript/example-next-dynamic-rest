import { Image, Box, Stack, Heading, HStack, Container, Center, SimpleGrid, VStack, Button } from "@chakra-ui/react"
import NextLink from "next/link"

import { GetServerSideProps } from "next"
import React, { FC } from "react"
import { getDogs, Item } from "../../lib/randomTerrier"

const ListView: FC<{ items: Item[] }> = ({ items }) => {
  return <Stack gap={4} p={4}>
    {items.map((item, i) => {
      return <Box key={i} rounded="base" shadow="base" p={4}>
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

const TileView: FC<{ items: Item[], withDescription?: boolean }> = ({ items, withDescription }) => {
  return <SimpleGrid columns={2} gap={4} p={4}>
    {items.map((item, i) => {
      return <Box key={i} rounded="base" shadow="base" p={4}>
        <VStack>
          <Box minWidth={200}>
            <Image boxSize={200} rounded="base" objectFit="cover" src={item.image} />
          </Box>
          <Stack>
            <Heading>{item.name}</Heading>
            <Box color="gray.500">{item.breed} terrier</Box>
            {withDescription && <Box>{item.description}</Box>}
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
        <Heading>Pretty Terrier Dogs</Heading>
      </Center>
      <Center>
        <HStack>
          <NextLink href="/dogs/list" passHref>
            <Button rounded="full" as="a">List View</Button>
          </NextLink>
          <NextLink href="/dogs/tile" passHref>
            <Button rounded="full" as="a">Tile View</Button></NextLink>
          <NextLink href="/dogs/tile/description" passHref>
            <Button rounded="full" as="a">Tile View (with text)</Button>
          </NextLink>
        </HStack>
      </Center>
      {children}
    </Stack>
  </Container>
}

const ViewRouter: FC<{ items: Item[], paths: string[] }> = ({ items, paths }) => {
  const path = paths.join("/")
  switch (path) {
    case "tile":
      return <TileView items={items} />
    case "tile/description":
      return <TileView items={items} withDescription />
    case "list":
    default:
      return <ListView items={items} />
  }
}

const Page = (props) => {
  return <Layout>
    <ViewRouter {...props} />
  </Layout>
}


export const getServerSideProps: GetServerSideProps = async (req) => {
  const query = req.query
  const dogs = await getDogs()

  return {
    props: {
      items: dogs,
      paths: query.paths ?? []
    },
  }
}

export default Page

