import { Button } from '@/components/ui/button';
interface SearchBarProps {
  onMobileFilterClick: () => void;
}
export function SearchBar({ onMobileFilterClick }: SearchBarProps) {
  return (
    <div className=" mt-20  px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex gap-3">
        <Button 
          variant="outline" 
          className="md:hidden"
          onClick={onMobileFilterClick}
        >
          Filters
        </Button>
      </div>
    </div>
  );
}