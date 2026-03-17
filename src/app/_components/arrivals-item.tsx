import Image from "next/image"
import HeadphonesImage1 from "@public/arrivals/headphones1.webp"
import HeartIcon from "@public/arrivals/heart-logo.svg"
import StarIcon from "@public/arrivals/star-icon.svg"
import { Flex } from "@/components/flex"
import { Button } from "@/components/button"
import { Typography } from "@/components/typography"

export const ArrivalsItem = () => {
    return <div className="w-65.5">
        <div className="h-87.5 relative bg-neutral-02 mb-3">
            <Image src={HeadphonesImage1} alt="image" className="w-full h-full object-center" priority />
            <Flex direction={"vertical"} justify={"between"} className="absolute top-0 left-0 right-0 bottom-0 p-4">
                <Flex justify={"between"} items={"center"}>
                    <span className="bg-white rounded-sm px-3.5 py-1 text-primary font-black text-[16px] leading-[100%] uppercase">
                        new
                    </span>

                    <button
                        type="button"
                        className="bg-white rounded-full p-1.5 inline-flex justify-center items-center overflow-hidden">
                        <Image src={HeartIcon} alt="wishlist" width={32} height={32} />
                    </button>
                </Flex>

                <Button variant={"black"} className="w-full">
                    Add to cart
                </Button>
            </Flex>
        </div>

        <div className="space-y-1">
            <div>
                {
                    Array.from({ length: 5 }).map((_, index) => <span key={index.toString()} className="text-primary inline-block w-4 h-4 mr-0.5">
                        <Image src={StarIcon} alt="rating" className="w-full h-full object-cover" />
                    </span>)
                }
            </div>
            <Typography heading={"h4"} size={"16"} weight={"bold"}>
                Skullcandy - Crusher anc 2 wireless headphones
            </Typography>
            <Typography heading={"p"} size={"14"} weight={"bold"}>
                $299.99
            </Typography>
        </div>
    </div>
}