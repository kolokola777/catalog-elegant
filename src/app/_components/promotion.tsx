"use client";

import Image from "next/image";
import PromoImg from "@public/promo.webp"
import { Typography } from "@/components/typography";
import { Button } from "@/components/button";
import { useEffect, useState } from "react";

export const PromotionSection = () => {
    const targetDate = new Date(2026, 2, 28)
    const [time, setTime] = useState<{ days: string, hours: string, minutes: string, seconds: string } | null>(null)

    const calcTimeLeft = () => {
        const now = new Date()
        const diff = targetDate.getTime() - now.getTime()

        if (diff <= 0) {
            return { days: "00", hours: "00", minutes: "00", seconds: "00" }
        }

        return {
            days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
            minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
            seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
        }
    }

    useEffect(() => {
        // init только на клиенте
        setTime(calcTimeLeft())
        const interval = setInterval(() => {
            setTime(calcTimeLeft())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    if (!time) {
        // пока на клиенте не инициализировалось
        return null
    }

    return (
        <section className="bg-[#FFAB00]/40 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* IMAGE */}
                <div className="w-full md:w-1/2 h-62.5 sm:h-87.5 md:h-auto">
                    <Image
                        src={PromoImg}
                        alt="Promo Image"
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-12 lg:px-18 py-8 sm:py-10 md:py-16 lg:py-24">
                    <div className="space-y-4 sm:space-y-6">
                        <p className="uppercase text-secondary-blue font-bold text-sm sm:text-base">
                            Promotion
                        </p>

                        <Typography heading={"h4"} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            Hurry up! 40% OFF
                        </Typography>

                        <Typography heading={"p"} size={"20"}>
                            Thousands of high tech are waiting for you
                        </Typography>

                        {/* TIMER */}
                        <div className="space-y-3">
                            <Typography heading={"p"} size={"16"}>
                                Offer expires in:
                            </Typography>

                            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6 text-center">
                                {[
                                    { label: "Days", value: time.days },
                                    { label: "Hours", value: time.hours },
                                    { label: "Minutes", value: time.minutes },
                                    { label: "Seconds", value: time.seconds },
                                ].map((item) => (
                                    <div key={item.label}>
                                        <time className="block bg-white text-lg sm:text-2xl md:text-[28px] font-semibold py-2">
                                            {item.value}
                                        </time>
                                        <Typography heading={"p"} size={"12"}>
                                            {item.label}
                                        </Typography>
                                    </div>
                                ))}
                            </div>

                            <Button variant={"black"} className="w-full sm:w-auto">
                                Shop now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}