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
    return <section className="py-12.5 overflow-x-hidden">
        <Container type="default">
            <Flex justify={"between"} items={"center"} className="pb-12.5">
                <Typography heading={"h4"}>
                    New Arrivals
                </Typography>
            </Flex>
        </Container>

        <Swiper
            slidesPerView={5}
            centeredSlides={true}
            spaceBetween={24}
            grabCursor={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}>
            <SwiperSlide><ArrivalsItem /></SwiperSlide>
            <SwiperSlide><ArrivalsItem /></SwiperSlide>
            <SwiperSlide><ArrivalsItem /></SwiperSlide>
            <SwiperSlide><ArrivalsItem /></SwiperSlide>
            <SwiperSlide><ArrivalsItem /></SwiperSlide>
            <SwiperSlide><ArrivalsItem /></SwiperSlide>
            <SwiperSlide><ArrivalsItem /></SwiperSlide>
            <SwiperSlide><ArrivalsItem /></SwiperSlide>
        </Swiper>
    </section>
}