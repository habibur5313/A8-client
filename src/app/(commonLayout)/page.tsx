import Head from "next/head";
import { HeroSection } from "@/components/modules/Home/HeroSection";
import { PopularDestinations } from "@/components/modules/Home/PopularDestination";
import { HowItWorks } from "@/components/modules/Home/HowItWorks";
import { TopGuides } from "@/components/modules/Home/TopGuides";
import { WhyChooseUs } from "@/components/modules/Home/WhyChooseUs";
import { Testimonials } from "@/components/modules/Home/Testimonials";
import { BecomeGuide } from "@/components/modules/Home/BecomeGuide";
import { FeaturedExperiences } from "@/components/modules/Home/FeaturedExperience";
import { ContactSection } from "@/components/modules/Home/ContactSection";

export default function Home() {
  
  return (
    <div className="min-h-screen  font-sans text-gray-900">
      <Head>
        <title>Travel Guide</title>
        <meta
          name="description"
          content="A modern"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <PopularDestinations />
        <HowItWorks />
        <TopGuides />
        <FeaturedExperiences />
        <WhyChooseUs />
        <Testimonials />
        <BecomeGuide />
        <ContactSection/>
      </main>
    </div>
  )
}