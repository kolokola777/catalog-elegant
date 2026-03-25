import { Container } from "@/components/container"
import { Typography } from "@/components/typography"
import Image from "next/image"
import BannerImg from "@public/banner-newsletter.webp"
import MailIcon from "@public/email.svg"

export const NewsletterSection = () => {
    return (
        <section className="
            bg-neutral-03 
            relative 
            py-16 sm:py-20 md:py-28 
            overflow-hidden
        ">
            {/* BACKGROUND */}
            <Image
                src={BannerImg}
                alt="headphones"
                className="absolute inset-0 w-full h-full object-cover"
                priority
            />

            {/* overlay (чтобы текст читался лучше) */}
            <div className="absolute inset-0" />

            <Container type="default" className="relative z-10">
                <div className="
                    max-w-md 
                    sm:max-w-lg 
                    md:max-w-xl 
                    mx-auto 
                    text-center 
                    px-4
                ">
                    <Typography
                        heading={"h4"}
                        className="text-xl sm:text-2xl md:text-3xl"
                    >
                        Join Our Newsletter
                    </Typography>

                    <p className="text-sm sm:text-base md:text-lg mt-2">
                        Sign up for deals, new products and promotions
                    </p>

                    {/* FORM */}
                    <form className="mt-6 sm:mt-8">
                        <div className="
                            flex 
                            items-center 
                            justify-between 
                            gap-3
                            border-b 
                            border-neutral-04 
                            pb-2
                            text-neutral-04
                        ">
                            <div className="flex items-center gap-2 flex-1">
                                <Image src={MailIcon} alt="mail icon" />

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="
                                        bg-transparent 
                                        outline-none 
                                        w-full 
                                        text-sm sm:text-base
                                    "
                                />
                            </div>

                            <button
                                type="submit"
                                className="
                                    text-sm sm:text-base 
                                    font-medium 
                                    whitespace-nowrap
                                "
                            >
                                Signup
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    )
}