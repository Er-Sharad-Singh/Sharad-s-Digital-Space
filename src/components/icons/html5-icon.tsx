import type { SVGProps } from "react";

export function Html5Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path fill="#E34F26" d="M2,2H22L20,20L12,22L4,20Z" />
      <path fill="#F16529" d="M12,4V19.9L18.5,18.2L20,4Z" />
      <path fill="#EBEBEB" d="M12,7.5H9.5l-.2-2H12V5.5H7l.3,4h4.7v-1.5H9.3l.1-1h2.6v3.5H8.5l.3,4.5H12v1.5L9,16.5l-.1-1.5h-1l-.3,3.5L12,20V18.5l2.5-.7.3-3.3H12V13h3.5l.3-4h-4Z" />
    </svg>
  );
}
