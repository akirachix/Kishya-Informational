
import Image from "next/image";
import Footer from "./components/footer";
import LandingPage from "./components/Landing";
import Navbar from "./components/Navbar";
import TeamSection from "./components/Team";

export default function Home() {
  return (
    <main>
     <Navbar/>
     <LandingPage/>
     <TeamSection/>
     <Footer/>
    </main>
  );
}
