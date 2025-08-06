import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

export function Html5Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s2-7 10-7 10 7 10 7-2 7-10 7-10-7-10-7Z" />
      <path d="m2 12 5 2-5 2" />
      <path d="m22 12-5 2 5 2" />
      <path d="M12 2v20" />
    </svg>
  );
}
