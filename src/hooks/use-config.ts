"use client"

import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type Config = {
  theme: "zinc" | "slate" | "stone" | "gray" | "neutral" | "red" | "rose" | "orange" | "green" | "blue" | "yellow" | "violet";
}

const configAtom = atomWithStorage<Config>("config", {
  theme: "zinc",
})

export function useConfig() {
  return useAtom(configAtom)
}
