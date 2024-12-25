import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="m8.671.295-1.18 1.204 3.757 3.647H.088v1.685h11.16l-3.756 3.647 1.18 1.204 5.874-5.693L8.67.295Z"
    />
  </svg>
)
export default SvgComponent
