import Image from "next/image"

export default function CarouselImage(props: { imageSrc?: string }) {
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
    