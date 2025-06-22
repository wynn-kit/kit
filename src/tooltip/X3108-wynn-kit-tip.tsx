import { useLayoutEffect, useRef, useState } from "react";
import { PositionToolTip, TooltipUIProps, variantColorClasses } from "./X3108-wynn-kit-tip-constant";
import { X3108MergeClasses } from "../copile/X3108-wynn-kit-copile";

export const X3108tip = ({
     isShowing = true,
     message,
     children,
     offset = 8,
     variant = "solid",
     schemeColor = "primary",
     position = "auto",
     className,
}: TooltipUIProps) => {
     const triggerRef = useRef<HTMLDivElement>(null);
     const tooltipRef = useRef<HTMLDivElement>(null);

     const [visible, setVisible] = useState(false);
     const [_position, setPosition] = useState<PositionToolTip | "auto">("auto");
     const [coords, setCoords] = useState({ top: 0, left: 0 });
     const [animationState, setAnimationState] = useState(false);

     useLayoutEffect(() => {
          if (visible && triggerRef.current && tooltipRef.current) {
               const triggerRect = triggerRef.current.getBoundingClientRect();
               const tooltipRect = tooltipRef.current.getBoundingClientRect();

               const space = {
                    top: triggerRect.top,
                    bottom: window.innerHeight - triggerRect.bottom,
                    left: triggerRect.left,
                    right: window.innerWidth - triggerRect.right,
               };

               const bestPosition = position === "auto"
                    ? (Object.entries(space).sort((a, b) => b[1] - a[1])[0][0] as PositionToolTip)
                    : position;

               setPosition(bestPosition);

               let top = 0;
               let left = 0;

               switch (bestPosition) {
                    case "top":
                         top = triggerRect.top - tooltipRect.height - offset;
                         left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
                         break;
                    case "bottom":
                         top = triggerRect.bottom + offset;
                         left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
                         break;
                    case "left":
                         top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
                         left = triggerRect.left - tooltipRect.width - offset;
                         break;
                    case "right":
                         top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
                         left = triggerRect.right + offset;
                         break;
               }

               setCoords({ top, left });
          }
     }, [visible, offset, _position]);

     const classesBased = X3108MergeClasses(
          "fixed z-50 px-3 py-1.5 text-sm rounded shadow-md pointer-events-none whitespace-nowrap transition-all duration-200 ease-out transform",
          animationState ? "scale-100 group-hover:scale-100 group-hover:opacity-100 transition-transform0" : "opacity-0 scale-90",
          variantColorClasses[variant][schemeColor],
          className
     );

     return (
          <div
               className="relative"
               ref={triggerRef}
               onMouseEnter={() => {
                    setVisible(true);
                    setAnimationState(true);
               }}
               onMouseLeave={() => {
                    setAnimationState(false);
                    setTimeout(() => setVisible(false), 150);
               }}
          >
               {children}

               {isShowing && visible && (
                    <div
                         ref={tooltipRef}
                         className={classesBased}
                         style={{
                              top: `${coords.top}px`,
                              left: `${coords.left}px`,
                         }}
                    >
                         {message}
                    </div>
               )}
          </div>
     );
};

X3108tip.displayName = "ToolTipUI";
