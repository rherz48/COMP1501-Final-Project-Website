"use client"

import { useRef } from "react"
import gsap from "gsap"
import SplitText from "gsap/SplitText"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(SplitText)

export default function SplitTextComponent({ text, className }: { text: string, className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    if (!ref.current) return

    const split = SplitText.create(ref.current, {
      type: "chars",
    })

    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.04,
      duration: 0.6,
    })

    return () => {
      split.revert()
    }
  }, [])

  return <span ref={ref} className={className || "text-color-primary text-center text-6xl font-bold"}>
    {text}
  </span>
}