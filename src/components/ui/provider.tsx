import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import React from "react"

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </ThemeProvider>
  )
}