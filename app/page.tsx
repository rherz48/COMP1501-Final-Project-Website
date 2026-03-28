"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "motion/react"
import Image from "next/image"
import { Download } from "lucide-react"

export default function Page() {
  return (
    <div>
      <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-4">
        <h1 className="text-center text-6xl font-bold text-blue-500">
          {siteConfig.name}
        </h1>
      </div>

      <div className="px-6 py-12">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold text-primary">
              Download the game now and start climbing!
            </h2>

            <p className="mt-4 max-w-lg text-center text-xl">
              {siteConfig.description}
            </p>

            <a href={siteConfig.links.download} className="mt-4 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button className="rounded-3xl p-6 text-2xl bg-linear-to-r from-blue-500 to-primary text-white hover:from-blue-600 hover:to-purple-600">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </motion.div>
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-center text-3xl font-bold text-primary">
              See the game in action!
            </h2>

            <p className="mt-4 text-center text-xl">Climb your way to the top!</p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-6 w-full"
            >
              <div className="mx-auto w-full max-w-5xl">
                <div className="relative aspect-video w-full">
                  <Image
                    src="/images/test_image.png"
                    alt="Gameplay Image 1"
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}