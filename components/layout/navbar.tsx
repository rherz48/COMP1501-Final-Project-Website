"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { siteConfig } from "@/config/site"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 w-full text-3xl font-bold p-4 border-b border-accent">

            <div className="mx-auto flex items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6">

                        {/* Iterate through navbar items */}
                        {
                            siteConfig.navigation.map((item) => (
                                <NavigationMenuItem key={item.name}>
                                    {/* Use motion for hover */}
                                    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "tween", stiffness: 300, damping: 20 }}>

                                        <NavigationMenuLink asChild
                                            className={cn(navigationMenuTriggerStyle(),
                                                "hover:text-primary rounded-lg px-5 py-2",
                                                item.highlight ? "rounded-lg px-5 py-2 text-primary border border-primary hover:text-xl" : "text-foreground")}
                                                
                                                {...(item.highlight && { target: "_blank", rel: "noopener noreferrer" })}>
                                            <Link href={item.href}>{item.name}</Link>
                                        </NavigationMenuLink>

                                    </motion.div>

                                </NavigationMenuItem>
                            ))
                        }

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}
