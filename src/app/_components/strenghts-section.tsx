import { Container } from "@/components/container"
import Image from "next/image"
import Shipping from "@public/shipping.svg"
import Finance from "@public/finance.svg"
import Lock from "@public/lock.svg"
import Call from "@public/call.svg"
import { Typography } from "@/components/typography"

const items = [
    {
        icon: Shipping,
        title: "Free Shipping",
        desc: "Order above $200",
    },
    {
        icon: Finance,
        title: "Money-back",
        desc: "30 days guarantee",
    },
    {
        icon: Lock,
        title: "Secure Payments",
        desc: "Secured by Stripe",
    },
    {
        icon: Call,
        title: "24/7 Support",
        desc: "Phone and Email support",
    },
]

export const StrenghtsSection = () => {
    return (
        <section className="py-8 sm:py-10 md:py-12">
            <Container type="default">
                <div className="
                    grid 
                    grid-cols-2 
                    sm:grid-cols-2 
                    md:grid-cols-4 
                    gap-4 
                    sm:gap-6
                ">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="
                                bg-neutral-03 
                                p-4 sm:p-6 md:p-8 
                                text-center 
                                sm:text-left
                                group
                            "
                        >
                            <Image
                                src={item.icon}
                                alt={item.title}
                                className="mb-3 sm:mb-4 mx-auto sm:mx-0 transition-transform duration-300 group-hover:scale-110"
                            />

                            <Typography
                                heading={"h4"}
                                size={"20"}
                                className="mb-1 sm:mb-2 text-base sm:text-lg"
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                heading={"p"}
                                size={"14"}
                                className="text-sm text-gray-500"
                            >
                                {item.desc}
                            </Typography>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}