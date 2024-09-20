
import LandvistaAbout from "./components/About";
import Overview from "./components/overview";
import Image from "next/image";
import Footer from "./components/footer";
import LandingPage from "./components/Landing";
import Navbar from "./components/Navbar";
import TeamSection from "./components/Team";

export default function Landvista(){
  return(
    <main>
     <Navbar/>
     <LandingPage/>
    <LandvistaAbout/>
    <Overview/>
     <TeamSection/>
     <Footer/>
    </main>
  );
}