import React, { useEffect, useRef, useState } from "react";
import { Spin, Row, Col } from "antd";

interface InfiniteScrollWrapperProps<T> {
  /** The current length of the data items being displayed */
  dataLength: number;

  /** Function to call when more items need to be loaded */
  next: () => void;

  /** Boolean indicating if more items can be loaded */
  hasMore: boolean;

  /** Boolean indicating if the component is currently loading more items */
  loading?: boolean;

  /** Optional message or component to display when there are no more items to load */
  endMessage?: React.ReactNode;

  /** Function to render the list of items */
  children: React.ReactNode;

  /** The items to be rendered in the list */
  items: T[];
}

const InfiniteScrollWrapper = <T,>({
  dataLength,
  next,
  hasMore,
  loading = false,
  endMessage = <>Check</>,
  children,
  items,
}: InfiniteScrollWrapperProps<T>) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!hasMore || loading || isFetching || dataLength < 10) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && !!hasMore) {
          setIsFetching(true);
          setTimeout(() => {
            setScrollPosition(0); // Reset scroll position to top

            next();

            setIsFetching(false);
          }, 500);
        }
      },
      { rootMargin: "150px" }
    );

    if (triggerRef.current) {
      observerRef.current.observe(triggerRef.current);
    }

    return () => {
      if (observerRef.current && triggerRef.current) {
        observerRef.current.unobserve(triggerRef.current);
      }
    };
  }, [loading, hasMore, next, isFetching]);

  return (
    <div className="w-full">
      <div className="w-full">
        {dataLength === 0 && loading ? (
          <div className="flex justify-center items-center h-12">
            <Spin size="large" />
          </div>
        ) : (
          <>{children}</>
        )}
      </div>
      <div className="mx-auto">
        {loading && dataLength > 0 && (
          <div className="flex justify-center items-center h-12">
            <Spin size="large" />
          </div>
        )}
        {hasMore && !isFetching && <div ref={triggerRef} className="h-1" />}
        {!hasMore && endMessage}
      </div>
    </div>
  );
};

export default InfiniteScrollWrapper;
