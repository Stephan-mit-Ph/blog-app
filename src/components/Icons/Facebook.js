import * as React from "react";
const SvgFacebook = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#facebook_svg__a)">
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.373 0 12c0 5.628 3.875 10.35 9.101 11.647v-7.98H6.627V12H9.1v-1.58c0-4.084 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.324a15.38 15.38 0 0 0-1.386-.044c-1.967 0-2.728.745-2.728 2.683V12h3.92l-.673 3.667h-3.247v8.245C19.396 23.195 24 18.135 24 12c0-6.627-5.373-12-12-12"
      />
    </g>
    <defs>
      <clipPath id="facebook_svg__a">
        <path fill="none" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFacebook;
