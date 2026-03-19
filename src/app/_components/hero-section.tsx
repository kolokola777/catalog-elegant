import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { Typography } from "@/components/typography"

export const HeroSection = () => {
    return (
        <section className="
        pt-10
            min-h-screen 
            bg-[url(/bg-mobile.png)] 
            md:bg-[url(/bg-desktop.jpg)]
            bg-center 
            bg-no-repeat 
            bg-cover
        ">
            <Container type="default">
                <div className="
                    max-w-full 
                    md:max-w-lg 
                    lg:max-w-xl 
                    ml-0 
                    md:ml-auto 
                    pt-16 
                    md:pt-20 
                    px-4 
                    md:px-0
                    text-center 
                    md:text-left
                ">
                    <Typography
                        heading={"h1"}
                        className="text-primary text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight"
                    >
                        Listen to <br />
                        the <span className="text-secondary-blue">amazing</span> music sound.
                    </Typography>

                    <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-7">
                        Experience music like never before
                    </p>

                    <Button
                        variant={"black"}
                        size={"md"}
                        className="py-3 px-8 sm:px-10 md:px-14"
                    >
                        Shopping Now
                    </Button>
                </div>
            </Container>
        </section>
    )
}