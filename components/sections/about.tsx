"use client"

import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { motion } from "motion/react"
import Image from "next/image"
import { Download } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import DownloadButton from "../ui/buttons/download-button"

export default function Page() {
    return (
        <div>
            <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col items-center gap-4">
                <h1 className="text-center text-6xl font-bold text-blue-500">
                    {siteConfig.name}
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
                                Our team consists of 4 members: Ryan, Brady, Max, and Siri.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="items">
                            <AccordionTrigger>What items are in the game?</AccordionTrigger>
                            <AccordionContent>
                                Item 1
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="upgrades">
                            <AccordionTrigger>What upgrades are in the game?</AccordionTrigger>
                            <AccordionContent>
                                Upgrade 1
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="content">
                            <AccordionTrigger>Game content</AccordionTrigger>
                            <AccordionContent>
                                Upgrade 1
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>

                    {/* Download Button */}
                    <DownloadButton/>
                </div>

            </div>
        </div>
    )
}