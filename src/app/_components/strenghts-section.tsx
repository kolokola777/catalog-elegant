import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Image from "next/image"
import Shipping from "@public/shipping.svg"
import Finance from "@public/finance.svg"
import Lock from "@public/lock.svg"
import Call from "@public/call.svg"
import { Typography } from "@/components/typography"

export const StrenghtsSection = () => {
    return <section className="py-10">
        <Container type="default">
            <Flex className="gap-6" justify={"between"}>
                <div className="bg-neutral-03 w-65.5 py-12">
                    <div className="px-14">
                        <Image src={Shipping} alt={"Shipping"} className="pb-4" />
                        <Typography heading={"h4"} size={"20"} className="pb-2">
                            Free Shipping
                        </Typography>
                        <Typography heading={"p"} size={"14"}>
                            Order above $200
                        </Typography>
                    </div>
                </div>
                <div className="bg-neutral-03 w-65.5 py-12">
                    <div className="px-12">
                        <Image src={Finance} alt={"Shipping"} className="pb-4" />
                        <Typography heading={"h4"} size={"20"} className="pb-2">
                            Money-back
                        </Typography>
                        <Typography heading={"p"} size={"14"}>
                            30 days guarantee
                        </Typography>
                    </div>
                </div>
                <div className="bg-neutral-03 w-65.5 py-12">
                    <div className="px-12">
                        <Image src={Lock} alt={"Shipping"} className="pb-4" />
                        <Typography heading={"h4"} size={"20"} className="pb-2">
                            Secure Payments
                        </Typography>
                        <Typography heading={"p"} size={"14"}>
                            Secured by Stripe
                        </Typography>
                    </div>
                </div>
                <div className="bg-neutral-03 w-65.5 py-12">
                    <div className="px-12">
                        <Image src={Call} alt={"Shipping"} className="pb-4" />
                        <Typography heading={"h4"} size={"20"} className="pb-2">
                            24/7 Support
                        </Typography>
                        <Typography heading={"p"} size={"14"}>
                            Phone and Email support
                        </Typography>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
}