import Banner from "@/Components/HomePage/Banner/Banner";
import CustomerReview from "@/Components/HomePage/CustomerReview/CustomerReview";
import HowItWorks from "@/Components/HomePage/HowItWorks/HowItWorks";
import UseCases from "@/Components/HomePage/UseCases/UseCases";
import WhyChooseUs from "@/Components/HomePage/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>

      <WhyChooseUs></WhyChooseUs>

      <CustomerReview></CustomerReview>

      <HowItWorks></HowItWorks>

      <UseCases></UseCases>
    </div>
  );
}
