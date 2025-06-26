"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./pages/Navbar";
import HeroSection from "./pages/HeroSection";
import TrustedBrandsSection from "./pages/Brands";
import Setup from "./pages/Setup";
import EducationSection from "./pages/EducationSection";
import TestimonialCard from "./pages/Testimonial";
import CreditPricing from "./pages/CreditPricing";
import Marquee from "./pages/Marquee";
import CustomSolutions from "./pages/CustomSolution";
import CustomSolutionExamples from "./pages/CustomSolutionExamples";
import BentoGrid from "./pages/BentoGrid";
import { Users } from "./pages/Users";
import { FAQSection } from "./pages/FAQSection";
import { Footer } from "./pages/Footer";
import LoadingScreen from "./components/LoadingScreen";

const Page = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const hasLoadedBefore = localStorage.getItem("hasLoadedBefore");
    if (hasLoadedBefore) {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasLoadedBefore", "true");
      }, 2000); // fake loading delay
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedBrandsSection />
      <EducationSection />
      <Setup />
      <TestimonialCard />
      <CreditPricing />
      <Marquee />
      <CustomSolutions />
      <CustomSolutionExamples />
      <BentoGrid />
      <Users autoplay />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Page;
