import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

import NavbarAdmin from './NavbarAdmin'
import MapLeaf from './MapLeaft'

const Welcome = () => {
  return (
    <Flex mt={2} pr={4} pl={4} flexDirection={'column'}>
      <NavbarAdmin />
      <MapLeaf />
    </Flex>
  )
}

export default Welcome
