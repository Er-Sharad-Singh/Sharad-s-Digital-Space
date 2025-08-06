import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function JavascriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 9a3 3 0 0 1-6 0" />
      <path d="M14 15a3 3 0 0 0 6 0" />
      <path d="M7 9v12" />
      <path d="M17 3v12" />
      <path d="M12 3v1" />
      <path d="M12 8v1" />
      <path d="M12 13v1" />
      <path d="M12 18v3" />
    </svg>
  );
}
