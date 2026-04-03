"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "motion/react"
import Image from "next/image"
import { Download } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import DownloadButton from "../ui/buttons/download-button"
import SplitText from "@/components/ui/text/split-text"

export default function Page() {
    return (
        <div>
            <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-4">
                <h1 className="text-hero">
                    <SplitText text={siteConfig.name} className="top-text" />
                </h1>

                <p className="mt-4 text-center text-xl">
                    {siteConfig.description}
                </p>

                {/* Accordion with details about the game */}
                <div className="mt-8 w-full">
                    <h2 className="text-2xl font-bold text-blue-500">Game Details</h2>
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="shipping"
                        className="max-w-full"
                    >
                        <AccordionItem value="team">
                            <AccordionTrigger>Who is on the development team?</AccordionTrigger>
                            <AccordionContent>
                                {/* Our team consists of 4 members: Ryan, Brady, Max, and Siri. */}
                                <ul className="flex gap-2 ml-2">
                                    {siteConfig.gameAuthors.map((author, index) => (
                                        <li key={index} className="text-muted-foreground">
                                            {author.name}
                                            {index < siteConfig.gameAuthors.length - 1 && ","}
                                            {index === siteConfig.gameAuthors.length - 2 && " and"}
                                        </li>
                                    ))}
                                </ul>

                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="items">
                            <AccordionTrigger>Where can I download the game?</AccordionTrigger>
                            <AccordionContent>
                                Our game is available for download on itch.io at the following link:
                                <a href={siteConfig.links.download} className="text-primary ml-2" target="_blank" rel="noopener noreferrer">
                                    {siteConfig.links.download}
                                </a>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    {/* Download Button */}
                    <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-4">
                        <DownloadButton />
                    </div>
                </div>

            </div>
        </div>
    )
}