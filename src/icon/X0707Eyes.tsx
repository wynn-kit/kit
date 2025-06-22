import { X0707MergeClasses } from "../copile/ClsxCopile";
import { getIconClasses, PropsIcon } from "./constant-icon";

export const X0707EyeOpen = ({
     size = "md",
     color = "primary",
}: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
     >
          <path
               fill="currentColor"
               fill-rule="evenodd"
               d="M4.19 7.262C5.94 5.577 8.517 4 12 4c3.483 0 6.06 1.577 7.81 3.262a15.086 15.086 0 0 1 3.001 4.11c.193.399.193.857 0 1.255a15.086 15.086 0 0 1-3 4.111C18.06 18.423 15.483 20 12 20c-3.483 0-6.06-1.577-7.81-3.262a15.088 15.088 0 0 1-3.001-4.11 1.435 1.435 0 0 1 0-1.255 15.088 15.088 0 0 1 3-4.111zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clip-rule="evenodd"
          />
     </svg>
);


export const X0707EyeClose = ({
     size = "md",
     color = "primary",
}: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
     >
          <path
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="m3 3 18 18" />
          <path
               fill="currentColor"
               fill-rule="evenodd"
               d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.088 15.088 0 0 0-3.001 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.83 10.83 0 0 0-2.808.363l11.474 11.475z"
               clip-rule="evenodd" />
     </svg>
);