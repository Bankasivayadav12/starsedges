import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeSections from "@/components/HomeSections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <HomeSections />
      </main>
    </div>
  );
}
