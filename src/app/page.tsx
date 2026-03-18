import { Arrivals } from "./_components/arrivals-section";
import { BestSellerSection } from "./_components/best-seller-section";
import { Collection } from "./_components/collection-section";
import { HeroSection } from "./_components/hero-section";
import { PromotionSection } from "./_components/promotion";
import { StrenghtsSection } from "./_components/strenghts-section";

const Page = () => {
    return <>
        <HeroSection />

        <Arrivals />

        <Collection />

        <BestSellerSection />

        <PromotionSection />

        <StrenghtsSection />
    </>
}

export default Page;