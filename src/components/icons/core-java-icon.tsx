import type { SVGProps } from "react";

export function CoreJavaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.5 10.5c-2-2-5-2-7 0s-2 5 0 7 5 2 7 0" />
        <path d="M12 12h8" />
        <path d="M4 12V8a4 4 0 0 1 4-4h4" />
        <path d="M18 12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4" />
    </svg>
  );
}
