import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect } from "react";


interface CarouselImageItem {
    imageSrc: string;
}

export default function CarouselComponent(props: { carouselImageItems?: CarouselImageItem[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-full pl-1 lg:basis-1/3 sm:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center">
                  <CarouselImage imageSrc={props.carouselImageItems?.[index]?.imageSrc || "/images/test_image.png"} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export function CarouselImage(props: { imageSrc?: string }) {
    return (
        <div className="relative w-full aspect-[16/9]">
            <Image
                src={props.imageSrc || "/images/test_image.png"}
                alt="Test Image"
                fill
                className="rounded-xl object-cover"
            />
        </div>
    )
}
    