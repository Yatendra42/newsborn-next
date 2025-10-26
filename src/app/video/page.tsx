import { Footer, Header } from "@/components";
import Aside from "@/components/aside/Aside";

export default function VideoPage() {
  return (
    <>
      <Header />
      <div className="container">
      <main>
          <Aside />
        <div className="card">
          <h1>Video Newssssssssssssssssssssssssssssss</h1>
          <p>Watch the latest video news and updates.</p>
        </div>
      </main>
      </div>
      <Footer />
    </>
  );
}
