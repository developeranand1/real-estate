import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Properties from "@/components/properties/Properties";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Cities from "@/components/cities/Cities";
import Header from "@/components/header/Header";
import Tools from "@/components/tools/Tools";

export default function Home() {
  return (
    <>
    <Header/>
     <Hero />
     <Tools/>
       <Cities />
     <Properties/>
     < About />
     <Contact/>
     <Footer/>
    </>
  
  );
}
