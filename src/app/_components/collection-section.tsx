import { Container } from "@/components/container"
import { Typography } from "@/components/typography"
import Image from "next/image"

import CollectionImage1 from "@public/collection/collection1.png"
import CollectionImage2 from "@public/collection/collection2.png"
import CollectionImage3 from "@public/collection/collection3.png"
import ArrowRightImg from "@public/arrow-right-black.svg"

export const Collection = () => {
    return (
        <section className="py-12.5">
            <Container type="default">
                <Typography heading="h4" className="mb-8">
                    Shop Collection
                </Typography>

                <div className="grid grid-cols-2 gap-6">
                    {/* LEFT BIG CARD */}
                    <div className="relative bg-neutral-02 p-8 overflow-hidden h-166">
                        <Image
                            src={CollectionImage1}
                            alt="Headband"
                            fill
                            className="object-contain"
                        />

                        <div className="absolute bottom-8 left-8">
                            <Typography heading={"h2"} size={"26"}>
                                Headband
                            </Typography>
                            <button type="button" className="flex items-center gap-1 text-sm font-medium">
                                Collection
                                <Image src={ArrowRightImg} alt="arrow to right" />
                            </button>
                        </div>
                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="grid grid-rows-2 gap-6">

                        {/* Earbuds */}
                        <div className="relative bg-neutral-02 p-8 overflow-hidden h-80">
                            <Image
                                src={CollectionImage2}
                                alt="Earbuds"
                                fill
                                className="absolute top-0 left-0 right-0 group-hover:scale-110 botton-0 transition-all ease-in-out duration-300"
                            />

                            <div className="absolute bottom-8 left-8">
                                <Typography heading={"h2"} size={"26"}>
                                    Earbuds
                                </Typography>
                                <button type="button" className="flex items-center gap-1 text-sm font-medium">
                                    <span>Collection</span>
                                    <span>
                                        <Image src={ArrowRightImg} alt="arrow to right" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Accessories */}
                        <div className="relative bg-neutral-02 p-8 overflow-hidden h-80">
                            <Image
                                src={CollectionImage3}
                                alt="Accessories"
                                fill
                                className="object-contain"
                            />

                            <div className="absolute bottom-8 left-8">
                                <Typography heading={"h2"} size={"26"}>
                                    Accessories
                                </Typography>
                                <button type="button" className="flex items-center gap-1 text-sm font-medium">
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