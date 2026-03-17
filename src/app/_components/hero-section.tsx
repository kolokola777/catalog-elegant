import { Button } from "@/components/button"
import { Container } from "@/components/container"
import { Typography } from "@/components/typography"

export const HeroSection = () => {
    return <section className="h-screen bg-[url(/hero-bg.jpg)] bg-no-repeat bg-size-[100%_100%] bg-bottom-left pt-70.5">
        <Container type="default">
            <div className="w-135 ml-auto">
                <Typography heading={"h1"} className="text-primary">
                    Listen to <br /> the <span className="text-secondary-blue">amazing</span> music sound.
                </Typography>

                <p className="text-xl leading-5.75 mb-7">
                    Experience music like never before
                </p>

                <Button variant={"black"} size={"md"} className="py-3 px-14">
                    Shopping Now
                </Button>
            </div>
        </Container>
    </section>
}