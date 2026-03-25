import { Container } from "@/components/container"
import { Typography } from "@/components/typography"
import { BestSellerItem } from "./best-seller-item"

export const BestSellerSection = () => {
    return (
        <section className="pt-10 sm:pt-12 md:pt-14">
            <Container type="default">
                <div className="space-y-6 sm:space-y-8 md:space-y-10">

                    <Typography
                        heading={"h4"}
                        className="text-xl sm:text-2xl md:text-3xl"
                    >
                        Best Seller
                    </Typography>

                    <div className="
                        grid 
                        grid-cols-2 
                        sm:grid-cols-3 
                        md:grid-cols-4 
                        lg:grid-cols-4 
                        gap-4 
                        sm:gap-6
                    ">
                        {[...Array(8)].map((_, i) => (
                            <BestSellerItem key={i} />
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    )
}