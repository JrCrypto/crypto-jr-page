import Footer from "@/components/Footer";
import HomeSection from "@/components/Home";
import MemberSection from "@/components/Members";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <HomeSection />

        <div id="about-us">
          <About />
        </div>

        <MemberSection />

        <Footer />
      </main>
    </>
  );
}
