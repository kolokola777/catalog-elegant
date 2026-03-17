import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import { Typography } from "@/components/typography"
import Link from "next/link"
import { BestSellerItem } from "./best-seller-item"

export const BestSellerSection = () => {
    return <section className="pt-12">
        <Container type="default">
            <div className="space-y-12">
                <Typography heading={"h4"}>
                    Best Seller
                </Typography>
                <Flex items={"center"}>
                    <Link href={"!#"}>
                        <Flex className="gap-4 gap-y-8 mb-25 flex-wrap" justify={"between"}>
                            <BestSellerItem />
                            <BestSellerItem />
                            <BestSellerItem />
                            <BestSellerItem />
                            <BestSellerItem />
                            <BestSellerItem />
                            <BestSellerItem />
                            <BestSellerItem />
                        </Flex>
                    </Link>
                </Flex>
            </div>
        </Container>
    </section>
}