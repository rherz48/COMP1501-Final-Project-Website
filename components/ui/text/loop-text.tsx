"use client"

import { useRef } from "react"
import gsap from "gsap"
import TextPlugin from "gsap/TextPlugin"
import { useGSAP } from "@gsap/react"
import { cn } from "@/lib/utils"

gsap.registerPlugin(TextPlugin)

export default function TextLoop({
  list,
  className,
}: {
  list: string[]
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  const words = list.length
    ? list
    : [
        "Climb higher",
        "Unleash your inner climber",
        "Jump into the unknown",
        "Get ready to climb",
      ]

  useGSAP(() => {
    if (!ref.current || words.length === 0) return

    let index = 0
    let stopped = false

    gsap.set(ref.current, { text: words[0] })

    const loop = () => {
      if (!ref.current || stopped) return

      index = (index + 1) % words.length

      gsap.to(ref.current, {
        duration: 1,
        text: words[index],
        ease: "none",
        delay: 1,
        onComplete: loop,
      })
    }

    loop()

    return () => {
      stopped = true
      gsap.killTweensOf(ref.current)
    }
  }, [words])

  return (
    <span className={cn("text-4xl font-bold text-primary", className)}>
      <span ref={ref} />
    </span>
  )
}