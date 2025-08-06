import type { SVGProps } from "react";

export function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3178C6" {...props}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10-8c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 11.5h2V18h-2v-2.5zm0-7h2v6h-2V6.5z"/>
    </svg>
  );
}
