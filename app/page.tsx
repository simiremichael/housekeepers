import BottomContainer from "@/components/bottomContainer/page";
import MiddleContainer from "@/components/middleContainer/page";
import Navbar from "@/components/navbar/page";
import ProcessContainer from "@/components/processContainer/page";
import ServiceContainer from "@/components/serviceContainer/page";
import TopContainer from "@/components/topContainer/page";
import WhyContainer from "@/components/whyContainer/page";



export default function Home() {
  return (
    <main className="">
      <Navbar />
      <TopContainer />
      <MiddleContainer />
      <ServiceContainer />
      <WhyContainer />
      <ProcessContainer />
      <BottomContainer />
    </main>
  );
}
