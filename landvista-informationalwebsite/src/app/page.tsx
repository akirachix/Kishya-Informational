
import LandvistaAbout from "./components/About";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
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