import { getIconClasses, PropsIcon } from "./constant-icon";



export const X0707Close = ({ size = "md", color = "primary" }: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
     >
          <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M12 12 7 7m5 5 5 5m-5-5 5-5m-5 5-5 5"
          />
     </svg>
);

export const X0707ArrowRight = ({ size = "md", color = "primary" }: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
     >
          <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="m10 7 5 5-5 5"
          />
     </svg>
);

export const X0707ArrowLeft = ({ size = "md", color = "primary" }: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
     >
          <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="m14 7-5 5 5 5"
          />
     </svg>
);

export const X0707ArrowDown = ({ size = "md", color = "primary" }: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
     >
          <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="m17 10-5 5-5-5"
          />
     </svg>
);

export const X0707ArrowUp = ({ size = "md", color = "primary" }: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
     >
          <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="m17 14-5-5-5 5"
          />
     </svg>
);
