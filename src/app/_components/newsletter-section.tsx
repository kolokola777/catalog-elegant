import { Container } from "@/components/container"
import { Typography } from "@/components/typography"
import { Flex } from "@/components/flex"
import Image from "next/image"
import BannerImg from "@public/banner-newsletter.webp"
import MailIcon from "@public/email.svg"

export const NewsletterSection = () => {
    return <section className="bg-neutral-03 relative pt-37.5 pb-37.25 overflow-hidden">
        <Image src={BannerImg} alt="headphones" className="absolute top-0 left-0 right-0 bottom-0 w-full" priority />

        <Container type="default" className="relative z-10">
            <div className="w-135 mx-auto text-center">
                <Typography heading={"h4"}>
                    Join Our Newsletter
                </Typography>
                <p className="text-[18px]">
                    Sign up for deals, new products and promotions
                </p>

                <form action="">
                    <Flex justify={"between"} items={"center"} className="border-b border-b-neutral-04 pt-8 pb-3 text-neutral-04">
                        <Flex className="gap-2">
                            <Image src={MailIcon} alt="mail icon" />
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-transparent outline-none w-full"
                            />
                        </Flex>
                        <button type="submit" className="cursor-pointer">
                            Signup
                        </button>
                    </Flex>
                </form>
            </div>
        </Container>
    </section>
}