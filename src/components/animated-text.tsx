"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  roles: string[]
  className?: string
}

export function AnimatedText({ roles, className }: AnimatedTextProps) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[roleIndex]
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      )

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    const typingSpeed = isDeleting ? 75 : 150
    const timeout = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, roleIndex, roles])

  return (
    <span className={cn("inline-block", className)}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
