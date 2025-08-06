"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function Section({ id, className, children, ...props }: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "w-full py-20 md:py-28 lg:py-32 transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className
      )}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  )
}
