import Section1 from "@/components/content/home/section-1";
import Section2 from "@/components/content/home/section-2";
import "@/components/content/home/home.css";
import Section3 from "@/components/content/home/section-3";
import Section4 from "@/components/content/home/section-4";
import Section5 from "@/components/content/home/section-5";
export default function Home() {
  return (
    <div className="home">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
