"use client"

import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import { Typography } from "@/components/typography"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"
import { ArrivalsItem } from "./arrivals-item"

export const Arrivals = () => {
    return (
        <section className="py-10 sm:py-12 md:py-14 overflow-x-hidden">
            <Container type="default">
                <Flex justify={"between"} items={"center"} className="pb-8 sm:pb-10 md:pb-12">
                    <Typography heading={"h4"} className="text-xl sm:text-2xl md:text-3xl">
                        New Arrivals
                    </Typography>
                </Flex>
            </Container>

            <Swiper
                centeredSlides={true}
                spaceBetween={16}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                        spaceBetween: 12,
                    },
                    480: {
                        slidesPerView: 1.5,
                        spaceBetween: 14,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 24,
                    },
                }}
                className="px-4 md:px-0"
            >
                {[...Array(8)].map((_, i) => (
                    <SwiperSlide key={i}>
                        <ArrivalsItem />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}