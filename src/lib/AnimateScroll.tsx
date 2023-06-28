import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  end?: number;
};

export default function AnimateScroll(
  { children, className, offset = 0, end = 200 }: Props,
): JSX.Element {
  const node = useRef<HTMLDivElement>(null);
  const [opacityValue, setOpacityValue] = useState(1);
  const listener = () => {
    let rect: DOMRect = node.current !== null
      ? node.current.getBoundingClientRect()
      : new DOMRect(0, 0, 1080, 962);

    let viewportStartY: number = window.innerHeight + offset;
    let viewportEndY: number = end + offset;
    let distanceFromStart: number = viewportStartY - rect.top;
    let isInViewPort: boolean = (rect.top < viewportStartY) &&
      (rect.top > viewportEndY);

    let percentage: number = isInViewPort
      ? Number.parseFloat(
        (distanceFromStart / (viewportStartY - viewportEndY)).toFixed(2),
      )
      : 1;

    setOpacityValue(percentage);

    if (rect.top < (viewportEndY - 400)) {
      if (window && window.removeEventListener) {
        window.removeEventListener("scroll", listener);
      }
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", listener);
    }
    return () => {
      if (window && window.removeEventListener) {
        window.removeEventListener("scroll", listener);
      }
    };
  }, []);
  return (
    <div ref={node} className={className} style={{ opacity: opacityValue }}>
      {children}
    </div>
  );
}
