import type { SVGProps } from 'react';

export const ButtonHoverSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1108"
    height="157"
    viewBox="0 0 1108 157"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#buttonHoverFilter)">
      <path
        d="M0 78.5C0 50.0118 0 35.7677 5.85431 25.0274C10.2699 16.9265 16.9265 10.2699 25.0274 5.85431C35.7677 0 50.0118 0 78.5 0H1029.5C1057.99 0 1072.23 0 1082.97 5.85431C1091.07 10.2699 1097.73 16.9265 1102.15 25.0274C1108 35.7677 1108 50.0118 1108 78.5C1108 106.988 1108 121.232 1102.15 131.973C1097.73 140.073 1091.07 146.73 1082.97 151.146C1072.23 157 1057.99 157 1029.5 157H78.5C50.0118 157 35.7677 157 25.0274 151.146C16.9265 146.73 10.2699 140.073 5.85431 131.973C0 121.232 0 106.988 0 78.5Z"
        fill="#402C29"
      />
    </g>

    <defs>
      <filter
        id="buttonHoverFilter"
        x="-47.424"
        y="-32"
        width="1202.66"
        height="221"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="0.768"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_innerShadowHover"
        />
        <feOffset dx="48" dy="32" />
        <feGaussianBlur stdDeviation="24" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.611765 0 0 0 0 0.219608 0 0 0 0 0.305882 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadowHover" />

        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="0.576"
          operator="dilate"
          in="SourceAlpha"
          result="effect2_innerShadowHover"
        />
        <feOffset dx="-48" dy="32" />
        <feGaussianBlur stdDeviation="24" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.611765 0 0 0 0 0.219608 0 0 0 0 0.305882 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="effect1_innerShadowHover" result="effect2_innerShadowHover" />

        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="2.88"
          operator="dilate"
          in="SourceAlpha"
          result="effect3_innerShadowHover"
        />
        <feOffset dy="-32" />
        <feGaussianBlur stdDeviation="24" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.611765 0 0 0 0 0.219608 0 0 0 0 0.305882 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="effect2_innerShadowHover" result="effect3_innerShadowHover" />

        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="0.192"
          operator="dilate"
          in="SourceAlpha"
          result="effect4_innerShadowHover"
        />
        <feOffset dy="12" />
        <feGaussianBlur stdDeviation="24" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.462745 0 0 0 0 0.513726 0 0 0 0 0.905882 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="effect3_innerShadowHover" result="effect4_innerShadowHover" />
      </filter>
    </defs>
  </svg>
);
