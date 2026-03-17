import { Container } from "@/components/container"
import Link from "next/link"
import Image from "next/image"
import { Flex } from "@/components/flex"
import ArrowDownImg from "@public/chevron-down.svg"

const menu = [
    {
        id: 1,
        label: "Home",
        page: "/",
        icon: null
    },
    {
        id: 2,
        label: "Shop",
        page: "#!",
        icon: <Image src={ArrowDownImg} alt="Arrow down" width={18} height={18} />
    },
    {
        id: 3,
        label: "Product",
        page: "#!",
        icon: <Image src={ArrowDownImg} alt="Arrow down" width={18} height={18} />
    },
    {
        id: 4,
        label: "Contact Us",
        page: "#!",
        icon: null
    },
]

export const Navigation = () => {
    return <nav className="fixed top-10 left-0 right-0 py-4">
        <Container type="default">
            <Flex justify={"between"} items={"center"}>
                <Link href={"/"} className="text-[24px] font-medium leading-6 text-primary">
                    3legant.
                </Link>

                <Flex className="flex-1 gap-10" justify={"center"}>
                    {
                        menu.map(item => <Link key={item.id} href={item.page} className="inline-flex gap-0.5 items-center">
                            <span>
                                {item.label}
                            </span>
                            {
                                item.icon && <span>
                                    {item.icon}
                                </span>
                            }
                        </Link>)
                    }
                </Flex>
            </Flex>
        </Container>
    </nav>
}