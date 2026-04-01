"use client"

import GridImage from "@/components/ui/image/grid_image"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

interface GridImageProps {
    src: string;
    alt: string;
}

export default function TweenGridImage(props: { images: Array<GridImageProps> }) {

  useGSAP(() => {
    // gsap.to(".grid-image", { rotation: 5, x: 50, duration: 1 });
    const tween = gsap.to(".grid-image", { rotation: 360, duration: 5, ease: "elastic" });
    
    tween.pause();
    tween.seek(2);
    tween.progress(0.5);
    tween.play();
  }, []);

    return (
        <div className="grid-image mx-auto mb-12 grid w-full max-w-6xl grid-cols-1 items-start gap-6 px-6 md:grid-cols-3">
            {/* Iterate through array of grid image props */}
            {props.images.map((image: GridImageProps, index: number) => (
          <GridImage key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
}
