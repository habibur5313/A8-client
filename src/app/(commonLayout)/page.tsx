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
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
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
