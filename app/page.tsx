import Image from "next/image";
import Navbar from "./components/navbar";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/hero";
import Equipments from "./components/equipments";
import Login from "./components/login";
import { Toaster } from 'react-hot-toast'
export default function Home() {
  return (
    <div>
      <Toaster />
  <Navbar/>
  <HeroSection />
  <Equipments />
  

    </div>
  
  );
}
