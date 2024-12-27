import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={33}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 0h24v24H0z" opacity={0.01} />
    <g clipPath="url(#a)">
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#b)"
      >
        <path d="M2.209 20.702V9.231l9.85-6.927 9.848 6.927v11.471c0 .56-.534 1.18-1.41 1.18H3.62c-.876 0-1.411-.62-1.411-1.18Z" />
        <path d="M8.857 20.925V10.917h6.402v10.008" />
      </g>
    </g>
    <path stroke="#000" strokeLinecap="round" strokeWidth={3} d="M7.5 31h9" />
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M1.209 1.081h21.698v21.801H1.209z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M1.209 1.081h21.698v21.801H1.209z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
