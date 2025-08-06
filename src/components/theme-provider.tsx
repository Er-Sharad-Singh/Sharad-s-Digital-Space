"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

import { useConfig } from "@/hooks/use-config"
import { cn } from "@/lib/utils"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [config] = useConfig()

  React.useEffect(() => {
    document.body.classList.forEach(className => {
      if (className.match(/^theme.*/)) {
        document.body.classList.remove(className)
      }
    })

    const theme = `theme-${config.theme}`
    document.body.classList.add(theme)
  }, [config])


  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
