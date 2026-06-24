import Banner from "@/Components/HomePage/Banner/Banner";
import CustomerReview from "@/Components/HomePage/CustomerReview/CustomerReview";
import FeaturedSection from "@/Components/HomePage/FeaturedSection/FeaturedSection";
import HowItWorks from "@/Components/HomePage/HowItWorks/HowItWorks";
import TopCreatorSection from "@/Components/HomePage/TopCreatorSection/TopCreatorSection";
import UseCases from "@/Components/HomePage/UseCases/UseCases";
import WhyChooseUs from "@/Components/HomePage/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>

      <FeaturedSection></FeaturedSection>

      <WhyChooseUs></WhyChooseUs>

      <TopCreatorSection></TopCreatorSection>

      <CustomerReview></CustomerReview>

      <HowItWorks></HowItWorks>

      <UseCases></UseCases>
    </div>
  );
}
