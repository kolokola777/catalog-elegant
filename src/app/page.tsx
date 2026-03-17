import { Arrivals } from "./_components/arrivals-section";
import { BestSellerSection } from "./_components/best-seller-section";
import { Collection } from "./_components/collection-section";
import { HeroSection } from "./_components/hero-section";

const Page = () => {
    return <>
        <HeroSection />

        <Arrivals />

        <Collection />

        <BestSellerSection />
    </>
}

export default Page;