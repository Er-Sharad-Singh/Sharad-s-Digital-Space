"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

import { useConfig } from "@/hooks/use-config"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [config] = useConfig()

  return (
    <NextThemesProvider {...props}>
      <div className={`theme-${config.theme}`}>{children}</div>
    </NextThemesProvider>
  )
}
