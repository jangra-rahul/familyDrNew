"use client";

import Image from "next/image";
import styles from "./page.module.css";
import CustomNavbar from "./CustomNavbar";
import Hero from "../components/HomePage/Hero";
import Services from "../components/HomePage/Services";
import Platforms from "../components/HomePage/Platforms";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Platforms />
      <Services />
      <Footer />
    </>
  );
}
