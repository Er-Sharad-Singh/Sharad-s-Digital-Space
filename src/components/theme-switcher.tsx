"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Check, Moon, Palette, Sun } from "lucide-react"

import { useConfig } from "@/hooks/use-config"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  const [config, setConfig] = useConfig()

  const themes = [
    { name: "zinc", label: "Zinc" },
    { name: "slate", label: "Slate" },
    { name: "stone", label: "Stone" },
    { name: "gray", label: "Gray" },
    { name: "neutral", label: "Neutral" },
    { name: "red", label: "Red" },
    { name: "rose", label: "Rose" },
    { name: "orange", label: "Orange" },
    { name: "green", label: "Green" },
    { name: "blue", label: "Blue" },
    { name: "yellow", label: "Yellow" },
    { name: "violet", label: "Violet" },
  ]
  

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <Palette className="mr-2 h-4 w-4" />
                <span>Theme</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
                <DropdownMenuSubContent>
                {themes.map((theme) => (
                    <DropdownMenuItem
                    key={theme.name}
                    onClick={() => setConfig({ ...config, theme: theme.name })}
                    >
                    <span
                        className="mr-2 h-4 w-4 rounded-full"
                        style={{ backgroundColor: `hsl(var(--primary))` }}
                    />
                    <span>{theme.label}</span>
                    {config.theme === theme.name && <Check className="ml-auto h-4 w-4" />}
                    </DropdownMenuItem>
                ))}
                </DropdownMenuSubContent>
            </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
