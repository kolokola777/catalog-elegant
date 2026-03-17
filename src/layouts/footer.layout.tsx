import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Image from "next/image"
import Link from "next/link"
import InstagramLogo from "@public/instagram.svg"
import FacebookLogo from "@public/facebook.svg"
import YouTubeLogo from "@public/youtube.svg"

const menu = [
    { id: 1, label: "Home", page: "/", icon: null },
    { id: 2, label: "Shop", page: "#!", icon: null },
    { id: 3, label: "Product", page: "#!", icon: null },
    { id: 4, label: "Blog", page: "#!", icon: null },
    { id: 5, label: "Contact Us", page: "#!", icon: null },
]

export const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-5">
            <Container type="default">
                <Flex justify={"between"} items={"center"}>
                    <Flex className="gap-8" items={"center"}>
                        <Link href={"/"} className="text-[24px] font-medium leading-6 text-white">
                            3legant.
                        </Link>
                        <p className="text-neutral-03">|</p>
                        <p className="text-neutral-03">Headphone Store</p>
                    </Flex>

                    <Flex className="gap-10 text-white">
                        {menu.map((item) => (
                            <Link key={item.id} href={item.page} className="inline-flex gap-0.5 items-center">
                                <span>{item.label}</span>
                                {item.icon && <span>{item.icon}</span>}
                            </Link>
                        ))}
                    </Flex>
                </Flex>

                <Flex className="mt-12.5 border-t border-t-neutral-05 pt-4 pb-13" justify={"between"} items={"center"}>
                    <Flex className="gap-7" items={"center"}>
                        <p className="text-neutral-03">
                            Copyright © 2023 3legant. All rights reserved
                        </p>
                        <Link href={"#!"} className="text-neutral-01 font-semibold">
                            Privacy Policy
                        </Link>
                        <Link href={"#!"} className="text-neutral-01 font-semibold">
                            Terms of Use
                        </Link>
                    </Flex>

                    <Flex className="gap-6">
                        <Link href={"#!"}>
                            <Image src={InstagramLogo} alt="Instagram" />
                        </Link>
                        <Link href={"#!"}>
                            <Image src={FacebookLogo} alt="Facebook" />
                        </Link>
                        <Link href={"#!"}>
                            <Image src={YouTubeLogo} alt="YouTube" />
                        </Link>
                    </Flex>
                </Flex>
            </Container>
        </footer>
    )
}