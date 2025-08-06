import type { SVGProps } from "react";

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-label="Next.js logomark" role="img" viewBox="0 0 180 180" {...props}>
      <mask
        id="a"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <circle cx="90" cy="90" r="90" fill="currentColor"></circle>
      </mask>
      <g mask="url(#a)">
        <circle cx="90" cy="90" r="90" fill="currentColor"></circle>
        <path
          d="M149.508 157.52L69.142 54H54v71.97h12.114V79.186l74.394 92.274c-5.882 3.42-12.48 5.54-19.554 5.54-32.53 0-58.85-26.32-58.85-58.85S63.47 54 96 54s58.85 26.32 58.85 58.85c0 8.52-1.81 16.63-5.074 23.94l-2.22 5.73z"
          fill="hsla(0,0%,100%,.8)"
        ></path>
        <path d="M113.97 54v58.85h12.11V54h-12.11z" fill="#fff"></path>
      </g>
    </svg>
  )
}
