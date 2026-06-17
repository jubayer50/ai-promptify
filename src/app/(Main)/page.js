import Banner from "@/Components/HomePage/Banner/Banner";
import CustomerReview from "@/Components/HomePage/CustomerReview/CustomerReview";
import WhyChooseUs from "@/Components/HomePage/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>

      <WhyChooseUs></WhyChooseUs>

      <CustomerReview></CustomerReview>
    </div>
  );
}
