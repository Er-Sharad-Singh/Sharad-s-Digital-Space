import type { SVGProps } from "react";

export function SqlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse fill="#00758F" cx="12" cy="6" rx="8" ry="3"/>
      <path fill="#00758F" d="M4,6v12c0,1.66,3.58,3,8,3s8-1.34,8-3V6"/>
      <path fill="#FFFFFF" d="M4,6c0,1.66,3.58,3,8,3s8-1.34,8-3" stroke="none" />
      <path d="M4 9v3" />
      <path d="M20 9v3" />
      <path d="M4 15v3" />
      <path d="M20 15v3" />
    </svg>
  );
}
