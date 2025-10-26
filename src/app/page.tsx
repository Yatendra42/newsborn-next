import { Footer, Header } from "@/components";
import Aside from "@/components/aside/Aside";
import HomeContent from "@/components/homeContent/HomeContent";
import RightSide from "@/components/rightAside";

export default function Home() {
  return (
    <>
      <Header />
       <div className="container">
         <main>
        <Aside />
        <HomeContent />
        <RightSide />
      </main>
       </div>
      <Footer />
    </>
  );
}
