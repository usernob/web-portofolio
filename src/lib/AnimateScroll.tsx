import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  end?: number;
  translate?: {
    startX?: number;
    startY?: number;
    endX?: number;
    endY?: number;
  };
};

export default function AnimateScroll(
  { children, className, offset = 0, end = 200, translate }: Props,
): JSX.Element {
  const node = useRef<HTMLDivElement>(null);
  const [opacityValue, setOpacityValue] = useState(0);
  const listener = (): void => {
    const rect: DOMRect = node.current !== null
      ? node.current.getBoundingClientRect()
      : new DOMRect(0, 0, 1080, 962); // if the element is not found then default to 1080x962

    const viewportStartY: number = window.innerHeight + offset;
    const viewportEndY: number = end + offset;
    const distanceFromStart: number = viewportStartY - rect.top;

    if (rect.top > viewportStartY) return;

    // https://stackoverflow.com/questions/13462001/ease-in-and-ease-out-animation-formula
    let tempPercentage: number = distanceFromStart /
      (viewportStartY - viewportEndY);
    let percentage: number = Number.parseFloat(
      (tempPercentage * tempPercentage * (3 - 2 * tempPercentage)).toFixed(2),
    );

    if (rect.top < viewportEndY) {
      // percentage = 1;
      if (window && window.removeEventListener) {
        window.removeEventListener("scroll", listener);
      }
    }

    return setOpacityValue(percentage);
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

  let translateX: number = (translate?.startX || 0) +
    (((translate?.endX || 0) - (translate?.startX || 0)) * opacityValue);
  let translateY: number = (translate?.startY || 0) +
    (((translate?.endY || 0) - (translate?.startY || 0)) * opacityValue);

  return (
    <div
      ref={node}
      className={className}
      style={{
        opacity: opacityValue,
        translate: `${translateX}px ${translateY}px`,
      }}
    >
      {children}
    </div>
  );
}
