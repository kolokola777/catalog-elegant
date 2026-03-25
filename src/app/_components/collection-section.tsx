import { Container } from "@/components/container"
import { Typography } from "@/components/typography"
import Image from "next/image"

import CollectionImage1 from "@public/collection/collection1.png"
import CollectionImage2 from "@public/collection/collection2.png"
import CollectionImage3 from "@public/collection/collection3.png"
import ArrowRightImg from "@public/arrow-right-black.svg"

export const Collection = () => {
    return (
        <section className="py-10 sm:py-12 md:py-14">
            <Container type="default">
                <Typography
                    heading="h4"
                    className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl"
                >
                    Shop Collection
                </Typography>

                <div className="
                    grid 
                    grid-cols-1 
                    md:grid-cols-2 
                    gap-4 
                    sm:gap-6
                ">
                    {/* LEFT BIG CARD */}
                    <div className="
                        relative 
                        bg-neutral-02 
                        p-4 sm:p-6 md:p-8 
                        overflow-hidden 
                        h-75 sm:h-100 md:h-162.5
                        group
                    ">
                        <Image
                            src={CollectionImage1}
                            alt="Headband"
                            fill
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />

                        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
                            <Typography heading={"h2"} size={"26"}>
                                Headband
                            </Typography>
                            <button className="flex items-center gap-1 text-sm font-medium">
                                Collection
                                <Image src={ArrowRightImg} alt="arrow to right" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="grid grid-rows-2 gap-4 sm:gap-6">

                        {/* Earbuds */}
                        <div className="
                            relative 
                            bg-neutral-02 
                            p-4 sm:p-6 md:p-8 
                            overflow-hidden 
                            h-50 sm:h-62.5 md:h-77.5
                            group
                        ">
                            <Image
                                src={CollectionImage2}
                                alt="Earbuds"
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
                                <Typography heading={"h2"} size={"26"}>
                                    Earbuds
                                </Typography>
                                <button className="flex items-center gap-1 text-sm font-medium">
                                    Collection
                                    <Image src={ArrowRightImg} alt="arrow to right" />
                                </button>
                            </div>
                        </div>

                        {/* Accessories */}
                        <div className="
                            relative 
                            bg-neutral-02 
                            p-4 sm:p-6 md:p-8 
                            overflow-hidden 
                            h-50 sm:h-62.5 md:h-77.5
                            group
                        ">
                            <Image
                                src={CollectionImage3}
                                alt="Accessories"
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />

                            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
                                <Typography heading={"h2"} size={"26"}>
                                    Accessories
                                </Typography>
                                <button className="flex items-center gap-1 text-sm font-medium">
                                    Collection
                                    <Image src={ArrowRightImg} alt="arrow to right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}