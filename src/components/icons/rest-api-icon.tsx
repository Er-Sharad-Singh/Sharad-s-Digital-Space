import type { SVGProps } from "react";

export function RestApiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M4 13h16" />
      <path d="m9 18 5-5-5-5" />
      <path d="M20 10v8" />
      <path d="M4 6v8" />
    </svg>
  );
}
