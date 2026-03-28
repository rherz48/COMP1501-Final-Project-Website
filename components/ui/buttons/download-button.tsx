"use client"
import { siteConfig } from "@/config/site"
import { motion } from "motion/react"
import { Button } from "../button"
import { Download } from "lucide-react"

export default function DownloadButton() {
    return (
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
    )
}