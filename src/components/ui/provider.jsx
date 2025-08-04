

import { ChakraProvider,defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider } from './color-mode'

function MyProvider(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

export default MyProvider;
