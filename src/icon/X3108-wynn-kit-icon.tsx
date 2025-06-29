import { getIconClasses, PropsIcon } from "./X3108-wynn-kit-constant-icon";

export const X3108Close = ({ size = "md", color }: PropsIcon) => (
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

export const X3108ArrowRight = ({ size = "md", color }: PropsIcon) => (
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

export const X3108ArrowLeft = ({ size = "md", color }: PropsIcon) => (
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

export const X3108ArrowDown = ({ size = "md", color }: PropsIcon) => (
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

export const X3108ArrowUp = ({ size = "md", color }: PropsIcon) => (
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

export const X3108EyeOpen = ({
     size = "md",
     color,
}: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
     >
          <path
               fill="currentColor"
               fillRule="evenodd"
               d="M4.19 7.262C5.94 5.577 8.517 4 12 4c3.483 0 6.06 1.577 7.81 3.262a15.086 15.086 0 0 1 3.001 4.11c.193.399.193.857 0 1.255a15.086 15.086 0 0 1-3 4.111C18.06 18.423 15.483 20 12 20c-3.483 0-6.06-1.577-7.81-3.262a15.088 15.088 0 0 1-3.001-4.11 1.435 1.435 0 0 1 0-1.255 15.088 15.088 0 0 1 3-4.111zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" clipRule="evenodd"
          />
     </svg>
);


export const X3108EyeClose = ({
     size = "md",
     color,
}: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
     >
          <path
               stroke="currentColor"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="m3 3 18 18" />
          <path
               fill="currentColor"
               fillRule="evenodd"
               d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.088 15.088 0 0 0-3.001 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.83 10.83 0 0 0-2.808.363l11.474 11.475z"
               clipRule="evenodd" />
     </svg>
);

export const X3108Loading = ({
     size = "md",
     color,
}: PropsIcon) => {
     return (
          <svg
               className={getIconClasses({ size, color }) + " animate-spin"}
               aria-hidden="true"
               role="status"
               viewBox="0 0 100 101"
               fill="currentColor"
               xmlns="http://www.w3.org/2000/svg"
          >
               <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
               />
               <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"

                    fill="#000000"
               />
          </svg>
     );
};
export const X3108Check = ({ size = "md", color }: PropsIcon) => (
     <svg
          className={getIconClasses({ size, color })}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
     >
          <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="m5 13 4 4L19 7"
          />
     </svg>
);