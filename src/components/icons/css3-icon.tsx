import type { SVGProps } from "react";

export function Css3Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path fill="#1572B6" d="M2.21,2H21.79L19.91,19.2,12,22,4.09,19.2Z" />
      <path fill="#FFF" d="M12,4.42,12,19.94,17.59,18.3,18.9,4.42Z" />
      <path fill="#EBEEF0" d="m12 7-5 .01.09.95.1 1.05h3.75l-.26 2.9H7.13l.31 3.51L12 17.01V14.8l-2.07-.56.12-1.63h1.95v-.01h.01l.2-2.2H7.01l-.2-2.2Z"/>
    </svg>
  );
}
