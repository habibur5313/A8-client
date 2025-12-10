import { Badge } from '@/components/ui/badge'
import { MapPin, Star, ShieldCheck } from 'lucide-react'
export function GuideHero() {
  return (
    <div className="relative mb-8">
      {/* Cover Image */}
      <div className="h-64 md:h-80 w-full rounded-3xl overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop" 
          alt="Travel landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      {/* Profile Info Overlay/Container */}
      <div className="px-4 md:px-8 relative -mt-16 md:-mt-20 flex flex-col md:flex-row items-start md:items-end gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-stone-200">
            <img 
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop" 
              alt="Guide profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-teal-500 text-white p-1.5 rounded-full border-2 border-white shadow-sm" title="Verified Guide">
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>
        {/* Text Info */}
        <div className="flex-1 pb-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-1">
            <h1 className="text-3xl font-bold text-stone-900">Elena Rossi</h1>
            <Badge variant="success" className="w-fit">Top Rated Guide</Badge>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 text-stone-600 mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-orange-500" />
              <span>Florence, Italy</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-stone-900">4.98</span>
              <span className="text-stone-400">(124 reviews)</span>
            </div>
          </div>
          
          <p className="text-stone-500 max-w-xl line-clamp-2 md:line-clamp-1">
            Passionate local historian and food lover showing you the hidden gems of Tuscany.
          </p>
        </div>
      </div>
    </div>
  )
}