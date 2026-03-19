import { Container } from "@/components/container"
import { Flex } from "@/components/flex"
import Image from "next/image"
import Link from "next/link"
import TicketImg from "@public/ticket-percent.svg"
import ArrowRightImg from "@public/arrow-right.svg"

export const Sale = () => {
    return <div className="bg-primary py-2">
        <Container type="default">
            <Flex justify={"center"} items={"center"} className="gap-3">
                <Image src={TicketImg} alt="Sale logo" width={24} height={24} />
                <p className="text-[12px] font-semibold leading-5 text-white xl:text-[14px] xl:leading-5.5">
                    30% off storewinde - Limited time!
                </p>

                <Link href={"#!"} className="inline-flex gap-1 items-center text-[14px] leading-6 font-semibold text-[#FFAB00] border-b pb-1 border-b-[#FFAB00]">
                    <span>
                        Shop Now
                    </span>
                    <Image src={ArrowRightImg} alt="Arrow right" width={24} height={24} />
                </Link>
            </Flex>
        </Container>
    </div>
}