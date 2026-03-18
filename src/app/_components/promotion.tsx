"use client";

import { Flex } from "@/components/flex";
import Image from "next/image";
import PromoImg from "@public/promo.webp"
import { Typography } from "@/components/typography";
import { Button } from "@/components/button";
import { useEffect, useState } from "react";

export const PromotionSection = () => {
    const targetDate = new Date(2026, 2, 20)
    const calcTimeLeft = () => {
        const now = new Date();

        const diff = targetDate.getTime() - now.getTime();

        if (diff <= 0) {
            return {
                days: "00",
                hours: "00",
                minutes: "00",
                seconds: "00"
            }
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((diff / (1000 * 60)) % 60)
        const seconds = Math.floor((diff / (1000)) % 60)

        return {
            days: String(days).padStart(2, "0"),
            hours: String(hours).padStart(2, "0"),
            minutes: String(minutes).padStart(2, "0"),
            seconds: String(seconds).padStart(2, "0"),
        }
    }

    const [time, setTime] = useState(calcTimeLeft())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(calcTimeLeft())
        }, 1000);

        return () => clearInterval(interval)
    }, [])

    return <section className="bg-[#FFAB00]/40">
        <Flex justify={"between"}>
            <div className="flex-1">
                <Image src={PromoImg} alt="Promo Image" className="w-full h-full object-center object-cover" priority />
            </div>

            <div className="flex-1 py-25.25 px-18">
                <div className="space-y-6">
                    <div className="space-y-4">
                        <p className="uppercase text-secondary-blue font-bold text-base">Promotion</p>

                        <Typography heading={"h4"}>
                            Hurry up! 40% OFF
                        </Typography>

                        <Typography heading={"p"} size={"20"}>
                            Thousands of high tech are waiting for you
                        </Typography>

                        <div className="space-y-3">
                            <Typography heading={"p"} size={"16"}>
                                Offer expires in:
                            </Typography>

                            <Flex className="gap-4 mb-6 text-center">
                                <div className="w-15">
                                    <time dateTime="" className="block bg-white text-[32px] leading-9.5 tracking-[-0.6px] p-2 font-semibold">
                                        {time.days}
                                    </time>
                                    <Typography heading={"p"} size={"12"}>
                                        Days
                                    </Typography>
                                </div>
                                <div className="w-15 h-15">
                                    <time dateTime="" className="block bg-white text-[32px] leading-9.5 tracking-[-0.6px] p-2 font-semibold">
                                        {time.hours}
                                    </time>
                                    <Typography heading={"p"} size={"12"}>
                                        Hours
                                    </Typography>
                                </div>
                                <div className="w-15">
                                    <time dateTime="" className="block bg-white text-[32px] leading-9.5 tracking-[-0.6px] p-2 font-semibold">
                                        {time.minutes}
                                    </time>
                                    <Typography heading={"p"} size={"12"}>
                                        Minutes
                                    </Typography>
                                </div>
                                <div className="w-15">
                                    <time dateTime="" className="block bg-white text-[32px] leading-9.5 tracking-[-0.6px] p-2 font-semibold">
                                        {time.seconds}
                                    </time>
                                    <Typography heading={"p"} size={"12"}>
                                        Seconds
                                    </Typography>
                                </div>
                            </Flex>

                            <Button variant={"black"}>
                                Shop now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Flex>
    </section>
}