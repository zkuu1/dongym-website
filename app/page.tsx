import Image from "next/image";
import Navbar from "./components/navbar";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/hero";
import Equipments from "./components/equipments";
import Login from "./components/login";

export default function Home() {
  return (
    <div>
  <Navbar/>
  <HeroSection />
  <Equipments />
  

    </div>
  
  );
}
