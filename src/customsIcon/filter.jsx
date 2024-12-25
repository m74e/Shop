import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path fill="#fff" stroke="#707070" d="M.5.5h24v24H.5z" opacity={0.01} />
    <g stroke="#231F20" clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path d="M12.495 4.41V21" />
        <path
          fill="#fff"
          d="M12.495 11.392a2.495 2.495 0 1 0 0-4.99 2.495 2.495 0 0 0 0 4.99Z"
        />
      </g>
      <g clipPath="url(#c)">
        <path d="M19.429 4.41V21" />
        <path
          fill="#fff"
          d="M19.495 18.99a2.495 2.495 0 1 0 0-4.99 2.495 2.495 0 0 0 0 4.99Z"
        />
      </g>
      <g clipPath="url(#d)">
        <path d="M5.495 4.41V21" />
        <path
          fill="#fff"
          d="M5.495 18.99a2.495 2.495 0 1 0 0-4.99 2.495 2.495 0 0 0 0 4.99Z"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M3 4.41h18.99V21H3z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M10 4.41h4.99V21H10z" />
      </clipPath>
      <clipPath id="c">
        <path fill="#fff" d="M17 4.41h4.99V21H17z" />
      </clipPath>
      <clipPath id="d">
        <path fill="#fff" d="M3 4.41h4.99V21H3z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
