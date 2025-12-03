import { AIGuides } from "@/components/modules/Home/AIGuides";
import { FeaturedCities } from "@/components/modules/Home/FeatureCities";
import { Hero } from "@/components/modules/Home/Hero";
import { HowItWorks } from "@/components/modules/Home/HowItWorks";
import { TopGuides } from "@/components/modules/Home/TopGuides";
import { WhyChooseUs } from "@/components/modules/Home/WhyChooseUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Guide AI</title>
        <meta
          name="description"
          content="A modern travel guide powered by AI to personalize your adventures. Discover hidden gems, plan itineraries, and explore like a local with intelligent recommendations tailored just for you. Your ultimate travel companion. builded with Next.js, Tailwind CSS, and OpenAI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <AIGuides/>
        <FeaturedCities/>
        <TopGuides/>
        <HowItWorks/>
        <WhyChooseUs/>
      </main>
    </>
  );
}
