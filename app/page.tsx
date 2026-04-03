"use client"

import { siteConfig } from "@/config/site"
import { motion } from "motion/react"
import Image from "next/image"
import { ChevronsDown } from "lucide-react"
import DownloadButton from "@/components/ui/buttons/download-button"
import TweenGridImage from "@/components/ui/image/tween_grid_image"
import SplitText from "@/components/ui/text/split-text"
import TextLoop from "@/components/ui/text/loop-text"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import "./globals.css"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Page() {

  // right class scroll trigger
  useGSAP(() => {
    gsap.set(".right", {
      x: 0,
      scale: 1,
      transformOrigin: "right center",
    })

    gsap.to(".right", {
      x: () => window.innerWidth * 0.18,
      scale: 0.5,
      transformOrigin: "right center",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".right-trigger",
        start: "top center",
        end: "+=400",
        scrub: true,
      },
    })
  }, [])


  return (
    <div>
      <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-4">
        <h1 className="text-hero">
          <SplitText text={siteConfig.name} className="top-text" />
        </h1>

        <p className="text-hero-secondary text-4xl backdrop-blur-3xl bg-accent rounded-4xl p-4">
          {siteConfig.heroTagline}
        </p>

      </div>

      <div className="flex w-full max-w-8xl flex-col gap-6 mt-12">
        <h1 className="text-hero-tertiary">
          {siteConfig.heroTaglineSecondary}
          <DownloadButton />
        </h1>

      </div>

      <div className="mx-auto mt-6 w-full max-w-7xl">
      
        <div className="right-trigger">
          <div className="right relative w-full aspect-[16/9]">
          
            <Image
              src="/images/test_image.png"
              alt="Test Image"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      
      </div>

    </div>

  )
}