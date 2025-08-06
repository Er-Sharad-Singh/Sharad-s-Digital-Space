import type { SVGProps } from "react";

export function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 12h-2" />
      <path d="M12 7.5a2.5 2.5 0 0 1 0 5" />
      <path d="M12 16.5a2.5 2.5 0 0 1 0-5" />
      <path d="M14.5 12a2.5 2.5 0 0 1-5 0" />
      <path d="M9.5 12a2.5 2.5 0 0 1 5 0" />
      <path d="M12 7.5a2.5 2.5 0 0 0 0 5" />
      <path d="M12 16.5a2.5 2.5 0 0 0 0-5" />
    </svg>
  );
}
