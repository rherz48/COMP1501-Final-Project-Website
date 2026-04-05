"use client"

import { siteConfig } from "@/config/site"
import Image from "next/image"
import DownloadButton from "@/components/ui/buttons/download-button"
import SplitText from "@/components/ui/text/split-text"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import "./globals.css"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "lenis"
import { cn } from "@/lib/utils"
import CarouselComponent from "@/components/ui/image/carousel-image"

gsap.registerPlugin(ScrollTrigger)

interface ImageSection {
  title: string;
  imageSrc?: string;
  description?: string;
}

export default function Page() {

  const imageSectionList: ImageSection[] = [
    {
      title: "Starting Tutorial Area",
      imageSrc: "/images/starting_area.png",
      description: "Start at the bottom, and climb your way up. Signs will guide you through game mechanics and controls."
    },
    {
      title: "Green areas",
      imageSrc: "/images/test_image.png",
      description: "Explore the many green areas with unique themes and challenges."
    },
    {
      title: "Desert areas",
      imageSrc: "/images/test_image.png",
      description: "Discover the vast desert landscapes with unique environments and challenges."
    },
    {
      title: "Snow areas",
      imageSrc: "/images/test_image.png",
      description: "See the icy terrains with unique mechanics."
    },
  ]

  const carouselComponentImages = [
    { imageSrc: "/images/starting_area.png" }, 
    { imageSrc: "/images/green_area/green_area_0.png" }, 
    { imageSrc: "/images/green_area/green_area_1.png" },
    { imageSrc: "/images/green_area/green_area_2.png" },
    { imageSrc: "/images/green_area/green_area_3_image_1.png" },
    { imageSrc: "/images/green_area/green_area_3_image_2.png" },
    { imageSrc: "/images/green_area/green_area_4.png" },
    { imageSrc: "/images/green_area/green_area_5.png" },

  ]

  useGSAP(() => {

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Start with centered element 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".centered-trigger",
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      }
    })

    // Scale down centered element and move to top when scroll past it 
    tl.to(".centered-element", {
      x: "0%",
      scale: 0.5,
      transformOrigin: "top center",
      ease: "none",
    })

    // Fade out centered element when scroll past the fade trigger section
    tl.to(".centered-element", {
      opacity: 0,
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: ".fade-centered-trigger-section",
        start: "top bottom%",
        end: "top 70%",
        scrub: true,
        // markers: true,
      }
    })

    //Clean up on unmount
    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    }

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

      <div className="flex w-full max-w-8xl flex-col items-center mt-12">
        <h1 className="text-hero-tertiary">
          {siteConfig.heroTaglineSecondary}

        </h1>
        <DownloadButton />
      </div>

      <div className="mx-auto mt-6 w-full max-w-7xl">

        <div className="centered-trigger">
          <div className="centered-element relative w-full aspect-[16/9]">

            <Image
              src="/images/starting_area.png"
              alt="Test Image"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>

      </div>

      {/* When you pass here, the centered trigger will fade away */}
      <div className="fade-centered-trigger-section mx-auto mt-6 w-full max-w-7xl">
        {/* Alternating sides with images and text description*/}
        {
          imageSectionList.map((section, index) => {

            // Alternate sides for each section
            const shouldReverse = index % 2 === 0;

            return (
              <div key={index} className={cn("flex flex-col md:flex-row items-center gap-6 my-12", shouldReverse ? "md:flex-row" : "md:flex-row-reverse")}>

                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <p className="text-lg text-muted-foreground">{section.description}</p>
                </div>
                <div className="w-full md:w-1/2 relative aspect-[16/9]">
                  {section.imageSrc && (
                    <Image
                      src={section.imageSrc}
                      alt={section.title}
                      fill
                      className="rounded-xl object-cover"
                    />
                  )}
                </div>
              </div>
            )
          })

        }

      </div>

      {/* Carousel section */}
      <div className="mx-auto mt-6 w-full max-w-7xl">
        <CarouselComponent carouselImageItems={carouselComponentImages} />
      </div>

      {/* Call to action for download */}
      <div className="mx-auto mt-6 w-full max-w-7xl">

        <h1 className="text-hero-secondary text-4xl backdrop-blur-3xl bg-accent rounded-4xl p-4 text-center bg-linear-to-r from-blue-500 to-primary text-white">
          PLAY THE GAME TODAY
        </h1>

        <div className="flex justify-center mt-4 pb-4">

          <p>Game created by </p>
          <ul className="flex gap-2 ml-2">
            {siteConfig.gameAuthors.map((author, index) => (
              <li key={index} className="text-muted-foreground">
                {author.name}
                {index < siteConfig.gameAuthors.length - 1 && ","}
                {index === siteConfig.gameAuthors.length - 2 && " and"}
              </li>
            ))}
          </ul>

          <p className="ml-1"> in COMP1501 at Carleton University.</p>

        </div>

        <div className="flex justify-center mt-4 pb-4 mb-10">
          <DownloadButton />
        </div>

      </div>

    </div>

  )
}