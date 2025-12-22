"use client";

import { IGuideProfile } from "@/types/guide.interface";
import BookingCard from "./BookingCard";
import GuideAbout from "./GuideAbout";
import GuideHeader from "./GuideHeader";
import GuideReviews from "./GuideReviews";
import GuideSkills from "./GuideSkills";
import GuideTours from "./GuideTours";


export default function GuideDetailsClient({ guide }: { guide: IGuideProfile }) {
  return (
    <div className="container mx-auto py-28 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* LEFT CONTENT */}
      <div className="lg:col-span-2 space-y-10">
        <GuideHeader guide={guide} />
        <GuideAbout guide={guide} />
        <GuideSkills guide={guide} />
        {guide?.bookings && <GuideTours bookings={guide.bookings} />}
        {guide?.reviews && <GuideReviews reviews={guide.reviews} />}
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="lg:sticky lg:top-24 h-fit">
        <BookingCard guide={guide} />
      </div>
    </div>
  );
}
