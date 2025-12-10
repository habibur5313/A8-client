import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

function FormCheckbox({
  id,
  label,
  count,
  defaultChecked,
}: {
  id: string;
  label: string;
  count?: number;
  defaultChecked?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-center justify-between cursor-pointer group"
    >
      <div className="flex items-center gap-2">
        <Checkbox id={id} defaultChecked={defaultChecked} />
        <span className="text-sm text-stone-700 group-hover:text-stone-900 transition">
          {label}
        </span>
      </div>

      {count !== undefined && (
        <span className="text-xs font-medium text-stone-500">{count}</span>
      )}
    </label>
  );
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-stone-100 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left mb-2 group"
      >
        <span className="font-semibold text-stone-900 group-hover:text-teal-700 transition-colors">
          {title}
        </span>

        {isOpen ? (
          <ChevronUp size={16} className="text-stone-400" />
        ) : (
          <ChevronDown size={16} className="text-stone-400" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-2 space-y-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FilterSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Mobile Header */}
      <div className="flex items-center justify-between md:hidden mb-6">
        <h2 className="text-xl font-bold text-stone-900">Filters</h2>
        <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full">
          <X size={20} />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
        
        {/* City */}
        <FilterSection title="City">
          <FormCheckbox id="paris" label="Paris, France" count={124} defaultChecked />
          <FormCheckbox id="tokyo" label="Tokyo, Japan" count={85} />
          <FormCheckbox id="barcelona" label="Barcelona, Spain" count={62} />
          <FormCheckbox id="rome" label="Rome, Italy" count={94} />
          <FormCheckbox id="nyc" label="New York, USA" count={45} />
        </FilterSection>

        {/* Category */}
        <FilterSection title="Category">
          <FormCheckbox id="food" label="Food & Drink" count={210} defaultChecked />
          <FormCheckbox id="art" label="Art & Culture" count={185} />
          <FormCheckbox id="adventure" label="Adventure" count={92} />
          <FormCheckbox id="nature" label="Nature & Wildlife" count={64} />
          <FormCheckbox id="night" label="Nightlife" count={35} />
        </FilterSection>

        {/* Price */}
        <FilterSection title="Price Range">
          <div className="px-1 py-4">
            <div className="relative h-1.5 bg-stone-200 rounded-full mb-6">
              <div className="absolute left-[10%] right-[30%] h-full bg-teal-600 rounded-full"></div>
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-teal-600 rounded-full shadow cursor-pointer"></div>
              <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-teal-600 rounded-full shadow cursor-pointer"></div>
            </div>

            <div className="flex items-center justify-between text-sm text-stone-600 font-medium">
              <span>$50</span>
              <span>$350</span>
            </div>
          </div>
        </FilterSection>

        {/* Languages */}
        <FilterSection title="Languages">
          <FormCheckbox id="lang-en" label="English" count={450} defaultChecked />
          <FormCheckbox id="lang-es" label="Spanish" count={120} />
          <FormCheckbox id="lang-fr" label="French" count={85} />
          <FormCheckbox id="lang-jp" label="Japanese" count={40} />
        </FilterSection>

        {/* Rating */}
        <FilterSection title="Rating">
          <label className="flex items-center cursor-pointer group">
            <input type="radio" name="rating" className="mr-3 w-4 h-4" />
            <span className="flex items-center text-sm">
              <span className="text-amber-400 mr-2">★★★★★</span>
              5.0 only
            </span>
          </label>

          <label className="flex items-center cursor-pointer group">
            <input type="radio" name="rating" className="mr-3 w-4 h-4" defaultChecked />
            <span className="flex items-center text-sm">
              <span className="text-amber-400 mr-2">★★★★☆</span>
              4.0 & up
            </span>
          </label>

          <label className="flex items-center cursor-pointer group">
            <input type="radio" name="rating" className="mr-3 w-4 h-4" />
            <span className="flex items-center text-sm">
              <span className="text-amber-400 mr-2">★★★☆☆</span>
              3.0 & up
            </span>
          </label>
        </FilterSection>
      </div>

      {/* Mobile Button */}
      <div className="pt-6 mt-auto border-t border-stone-100 md:hidden">
        <Button className="w-full" onClick={onClose}>
          Show 145 Results
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pr-4">
        {sidebarContent}
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-50 p-6 md:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
