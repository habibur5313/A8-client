"use client";
import { FilterSidebar } from '@/components/modules/TourExperiences/FilterSidebar';
import { SearchBar } from '@/components/modules/TourExperiences/Searchbar';
import { Tour, TourCard } from '@/components/modules/TourExperiences/TourCard';
import { useState } from 'react';
// Mock Data
const MOCK_TOURS: Tour[] = [
  {
    id: '1',
    title: 'Hidden Gems of Montmartre: Art & History Walking Tour',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 65,
    rating: 4.9,
    reviews: 128,
    location: 'Paris, France',
    duration: '3 hours',
    category: 'Art & Culture',
    guide: {
      name: 'Sophie Laurent',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '2',
    title: 'Tokyo After Dark: Shinjuku Izakaya Hopping',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 120,
    rating: 4.8,
    reviews: 85,
    location: 'Tokyo, Japan',
    duration: '4 hours',
    category: 'Food & Drink',
    guide: {
      name: 'Kenji Tanaka',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '3',
    title: 'Gaudí’s Masterpieces: Skip-the-Line Sagrada Família',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 85,
    rating: 4.7,
    reviews: 342,
    location: 'Barcelona, Spain',
    duration: '2.5 hours',
    category: 'Art & Culture',
    guide: {
      name: 'Mateo Garcia',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '4',
    title: 'Ancient Rome Underground: Catacombs & Crypts',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 95,
    rating: 4.9,
    reviews: 210,
    location: 'Rome, Italy',
    duration: '3.5 hours',
    category: 'History',
    guide: {
      name: 'Giulia Romano',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '5',
    title: 'Kyoto Tea Ceremony in a Traditional Machiya',
    image: 'https://images.unsplash.com/photo-1531986362435-16b427eb9c26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 75,
    rating: 5.0,
    reviews: 56,
    location: 'Kyoto, Japan',
    duration: '1.5 hours',
    category: 'Culture',
    guide: {
      name: 'Yuki Sato',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '6',
    title: 'Brooklyn Street Art & Graffiti Workshop',
    image: 'https://images.unsplash.com/photo-1505995433366-e12047f3f144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 55,
    rating: 4.6,
    reviews: 89,
    location: 'New York, USA',
    duration: '2 hours',
    category: 'Art & Culture',
    guide: {
      name: 'Marcus Johnson',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '7',
    title: 'Tuscan Wine Tasting & Vineyard Lunch',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 150,
    rating: 4.9,
    reviews: 175,
    location: 'Florence, Italy',
    duration: '6 hours',
    category: 'Food & Drink',
    guide: {
      name: 'Alessandro Rossi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '8',
    title: 'Midnight in Paris: Vintage Car Night Tour',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 180,
    rating: 4.8,
    reviews: 92,
    location: 'Paris, France',
    duration: '2 hours',
    category: 'Adventure',
    guide: {
      name: 'Jean-Luc Dubois',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '9',
    title: 'Bali Rice Terrace Trekking & Jungle Swing',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    price: 45,
    rating: 4.7,
    reviews: 230,
    location: 'Ubud, Indonesia',
    duration: '5 hours',
    category: 'Nature',
    guide: {
      name: 'Wayan Putra',
      avatar: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  }
];
export default function TourPage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  return (
    <div className="min-h-screen bg-stone-50">
      <SearchBar onMobileFilterClick={() => setIsMobileFilterOpen(true)} />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <FilterSidebar 
            isOpen={isMobileFilterOpen} 
            onClose={() => setIsMobileFilterOpen(false)} 
          />
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-stone-900">
                Explore Experiences
                <span className="ml-3 text-sm font-normal text-stone-500">145 results found</span>
              </h1>
              
              <div className="hidden md:flex items-center space-x-2 text-sm text-stone-600">
                <span>Sort by:</span>
                <select className="bg-transparent font-semibold text-stone-900 focus:outline-none cursor-pointer">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_TOURS.map((tour, index) => (
                <TourCard key={tour.id} tour={tour} index={index} />
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <button className="px-8 py-3 bg-white border border-stone-200 rounded-full text-stone-600 font-medium hover:bg-stone-50 hover:text-stone-900 transition-colors shadow-sm">
                Load More Experiences
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}