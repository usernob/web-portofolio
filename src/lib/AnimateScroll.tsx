import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import throttle from "lodash.throttle";

type Props = {
    className?: string;
    addClass?: string;
    removeClass?: string;
    children?: any;
};
const AnimateScroll = ({
    className: classNameProps,
    addClass,
    removeClass,
    children,
}: Props) => {
    const [newClass, setNewClass] = useState("");
    const [classes, setClasses] = useState(classNameProps);
    const node: { current: any } = useRef(null);

    const getElementTop = useCallback((elm: any) => {
        let yPos = 0;
        while (
            elm &&
            elm.offsetTop !== undefined &&
            elm.clientTop !== undefined
        ) {
            yPos += elm.offsetTop + elm.clientTop;
            elm = elm.offsetParent;
        }
        return yPos;
    }, []);

    const getScrollPos = useCallback(() => {
        if (window.pageYOffset !== undefined) {
            return window.pageYOffset;
        }
        return 0;
    }, []);

    const getScrollableParentHeight = useCallback(() => {
        if (window.innerHeight !== undefined) {
            return window.innerHeight;
        }
        return 0;
    }, []);

    const getViewportTop = useCallback(() => {
        return getScrollPos();
    }, [getScrollPos]);

    const getViewportBottom = useCallback(() => {
        return getScrollPos() + getScrollableParentHeight() / 2 + 150;
    }, [getScrollPos, getScrollableParentHeight]);

    const isBellowViewport = useCallback(() => {
        const elTop = getElementTop(node.current) - getElementTop(window);
        return elTop > getViewportBottom();
    }, [getElementTop, getViewportTop, node]);

    const handleScroll = useCallback(() => {
        if (!isBellowViewport()) {
            setNewClass(addClass || "");
            let pattern = new RegExp(removeClass?.replace(" ", "|") || "", "gm")
            setClasses(classes?.replace(pattern, ""))
        } else {
            setNewClass("");
            setClasses(classNameProps);
        }
    }, [isBellowViewport]);

    const listener = useMemo(
        () =>
            throttle(() => {
                if (node.current) handleScroll();
            }, 50),
        [handleScroll]
    );

    useEffect(() => {
        if (window) {
            window.addEventListener("scroll", listener);
        }
        return () => {
            if (window && window.removeEventListener) {
                window.removeEventListener("scroll", listener);
            }
        };
    }, [handleScroll, listener]);
    return (
        <div
            ref={node}
            className={classes ? `${classes} ${newClass}` : newClass}
        >
            {children}
        </div>
    );
};

export default AnimateScroll;
