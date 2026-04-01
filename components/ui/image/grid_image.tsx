import Image from "next/image";
import { motion } from "motion/react"


export default function GridImage(props: { src: string; alt: string }) {

    
    return (
        <div>
         <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            // Grid-image class used for gsap
            className="grid-image relative aspect-square w-full border-4 border-primary rounded-xl"
        >
          <Image
            src={props.src}
            alt={props.alt}
            fill
            className="rounded-xl object-cover"
          />
        </motion.div>
        </div>
)};