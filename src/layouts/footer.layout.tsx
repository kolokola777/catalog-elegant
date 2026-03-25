import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Image from "next/image"
import Link from "next/link"
import InstagramLogo from "@public/instagram.svg"
import FacebookLogo from "@public/facebook.svg"
import YouTubeLogo from "@public/youtube.svg"

const menu = [
    { id: 1, label: "Home", page: "/" },
    { id: 2, label: "Shop", page: "#!" },
    { id: 3, label: "Product", page: "#!" },
    { id: 4, label: "Blog", page: "#!" },
    { id: 5, label: "Contact Us", page: "#!" },
]

export const Footer = () => {
    return (
        <footer className="bg-black pt-12 sm:pt-16 md:pt-20 pb-6">
            <Container type="default">

                {/* TOP */}
                <div className="
                    flex 
                    flex-col 
                    md:flex-row 
                    md:items-center 
                    md:justify-between 
                    gap-6
                ">
                    {/* LOGO */}
                    <div className="
                        flex 
                        flex-col 
                        sm:flex-row 
                        sm:items-center 
                        gap-2 sm:gap-4 
                        text-center sm:text-left
                    ">
                        <Link href="/" className="text-[24px] font-medium text-white">
                            3legant.
                        </Link>
                        <span className="hidden sm:block text-neutral-03">|</span>
                        <p className="text-neutral-03">Headphone Store</p>
                    </div>

                    {/* MENU */}
                    <div className="
                        grid 
                        grid-cols-2 
                        sm:grid-cols-3 
                        md:flex 
                        gap-4 sm:gap-6 md:gap-10 
                        text-white 
                        text-center md:text-left
                    ">
                        {menu.map((item) => (
                            <Link key={item.id} href={item.page}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="
                    mt-8 sm:mt-10 md:mt-12 
                    border-t border-neutral-05 
                    pt-4 
                    flex 
                    flex-col 
                    md:flex-row 
                    md:items-center 
                    md:justify-between 
                    gap-4
                ">
                    {/* LEFT */}
                    <div className="
                        flex 
                        flex-col 
                        sm:flex-row 
                        items-center 
                        gap-2 sm:gap-6 
                        text-center sm:text-left
                    ">
                        <p className="text-neutral-03 text-sm">
                            Copyright © 2023 3legant. All rights reserved
                        </p>

                        <div className="flex gap-4">
                            <Link href="#!" className="text-neutral-01 font-semibold text-sm">
                                Privacy Policy
                            </Link>
                            <Link href="#!" className="text-neutral-01 font-semibold text-sm">
                                Terms of Use
                            </Link>
                        </div>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex justify-center md:justify-end gap-6">
                        <Link href="#!">
                            <Image src={InstagramLogo} alt="Instagram" />
                        </Link>
                        <Link href="#!">
                            <Image src={FacebookLogo} alt="Facebook" />
                        </Link>
                        <Link href="#!">
                            <Image src={YouTubeLogo} alt="YouTube" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}