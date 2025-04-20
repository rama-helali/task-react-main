import { useEffect, useRef } from "react";

interface InfiniteScrollProps {
  fetchData: () => void;
  hasMore: boolean;
  loading: boolean;
  root?: HTMLElement | null; // Optional custom scroll container
}

const useInfiniteScroll = ({
  fetchData,
  hasMore,
  loading,
  root,
}: InfiniteScrollProps) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const setTargetRef = (node: HTMLElement | null) => {
    if (loading) return; // Avoid observing while loading

    if (observer.current) observer.current.disconnect(); // Clean up previous observers

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Reached bottom, fetching more data...");
          fetchData();
        }
      },
      {
        root: root || null, // Use custom scroll container or window (default)
        threshold: 1.0, // Trigger when the element is fully visible
        rootMargin: "0px 0px 200px 0px", // Trigger slightly before it reaches the end (200px above the bottom)
      }
    );

    if (node) {
      observer.current.observe(node); // Attach observer to the loader target
      console.log("Observer attached to target");
    }
  };

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect(); // Clean up observer on unmount
    };
  }, []);

  return { setTargetRef };
};

export default useInfiniteScroll;
