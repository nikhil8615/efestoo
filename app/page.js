import EventHighlight from "@/components/EventHighlight";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonial";
import TrendingEvents from "../components/TrendingEvents";

export default function Home() {
  return (
    <main>
      <TrendingEvents />
      <EventHighlight />
      <Testimonials />
      <Footer />
    </main>
  );
}
