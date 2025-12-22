import { ContactSection } from '@/components/modules/Home/ContactSection'
import { HowItWorks } from '@/components/modules/Home/HowItWorks'
import { Testimonials } from '@/components/modules/Home/Testimonials'
import { WhyChooseUs } from '@/components/modules/Home/WhyChooseUs'
import Head from 'next/head'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Contact | Travel Guide",
  description: "About | Contact | Travel Guide",
};

const AboutAndContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Head>
        <title>Travel Guide | About | Contact</title>
        <meta
          name="description"
          content="A modern"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <ContactSection/>
      </main>
    </div>
  )
}

export default AboutAndContactPage