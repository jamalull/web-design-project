import { Box, Button, Container, Flex, HStack, List, ListItem, Text } from "@chakra-ui/react"
import { Icons } from "../components/Icons"
import React from 'react'
function Home() {
  return (
    <>
      <Flex h='calc(100vh - 90px)'  p={2} gap={4}>
        
        {/* Sidebar Left */}
        <Container w='400px' rounded={5}>
          <Container h='150px' overflow={"hidden"} bg='#121212' rounded={5} mb={7}>
            <List p={13} m={0}>
              <ListItem textColor={"white"}>
                <Icons.spotify height={40}/>
              </ListItem>
              <ListItem textColor={"white"}>
                <HStack h={"40"}>
                  <Icons.home height={24}/>
                  <Text>Home</Text>
                </HStack>
              </ListItem>
              <ListItem textColor={"gray"}>
                <HStack  h={"40"}>
                  <Icons.search height={24}/>
                  <Text>Search</Text>
                </HStack>
              </ListItem>
            </List>
          </Container>

          <Container h='calc(100vh - 247px)'   bg='#121212' rounded={5}>
            <List p={13} m={0}>
              <ListItem textColor={"white"}>
                <HStack h={"40"}>
                  <Icons.library height={24}/>
                  <Text>Your Library</Text>
                </HStack>
              </ListItem>
              <ListItem textColor={"gray"}>
                <HStack  h={"40"}>
                  <Icons.plus height={20}/>
                  <Text>Create Playlist</Text>
                </HStack>
              </ListItem>
              <ListItem textColor={"gray"}>
                <HStack  h={"40"}>
                  <Icons.heart height={20}/>
                  <Text>Liked Songs</Text>
                </HStack>
              </ListItem>
            </List>
          </Container>
        </Container>

        <Container w='100%' bg='#242424' rounded={5}>
          <Flex h={50} bg={"#121212"} alignItems={"center"}>
            <Container ml={30}>
              <HStack gap={20}>
                <Box>
                  <Icons.chevronLeft height={20}/>
                </Box>
                <Box>
                  <Icons.chevronRight height={20}/>
                </Box>
              </HStack>
            </Container>

            <Button colorScheme='blue'>Button</Button>
          </Flex>
        </Container>
      </Flex>
    </>
  )
}

export default Home