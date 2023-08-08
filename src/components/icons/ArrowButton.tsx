import { SVGProps } from 'react'

export const ArrowButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={12}
    fill="none"
    {...props}
  >
    <path fill="#2F3083" d="M7.298 11.801.914.743h12.769L7.298 11.801Z" />
  </svg>
)
