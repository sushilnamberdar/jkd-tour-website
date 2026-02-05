"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

// Updated context to store slide index + snaps
const CarouselContext = React.createContext({
  emblaApi: null,
  selectedIndex: 0,
  scrollSnaps: [],
});

export function Carousel({ opts, plugins, className, children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts, plugins);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  // Track slide changes
  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

  }, [emblaApi]);

  return (
    <CarouselContext.Provider value={{ emblaApi, selectedIndex, scrollSnaps }}>
      <div className={cn("relative overflow-hidden", className)} ref={emblaRef}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ children, className }) {
  return (
    <div className={cn("flex", className)}>
      {children}
    </div>
  );
}


export function CarouselItem({ children }) {
  return (
    <div className="flex-[0_0_100%]">
      {children}
    </div>
  );
}



export function CarouselNext({ className }) {
  const { emblaApi } = React.useContext(CarouselContext);
  return (
    <button
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow",
        className
      )}
      onClick={() => emblaApi && emblaApi.scrollNext()}
    >
      <ChevronRight />
    </button>
  );
}

export function CarouselPrevious({ className }) {
  const { emblaApi } = React.useContext(CarouselContext);
  return (
    <button
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow",
        className
      )}
      onClick={() => emblaApi && emblaApi.scrollPrev()}
    >
      <ChevronLeft />
    </button>
  );
}

// ⭐ NEW: Dots / Pagination Component
export function CarouselDots() {
  const { emblaApi, selectedIndex, scrollSnaps } =
    React.useContext(CarouselContext);

  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => emblaApi && emblaApi.scrollTo(index)}
          className={cn(
            "h-3 w-3 rounded-full transition-all",
            selectedIndex === index
              ? "bg-blue-700 scale-110"
              : "bg-white/70 hover:bg-white"
          )}
        />
      ))}
    </div>
  );
}
