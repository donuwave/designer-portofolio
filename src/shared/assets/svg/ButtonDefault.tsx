import type { SVGProps } from 'react';

export const ButtonDefaultSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1108"
    height="157"
    viewBox="0 0 1108 157"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#buttonDefaultFilter)">
      <rect width="1108" height="157" rx="48" fill="#0E0E0E" />
    </g>

    <defs>
      <filter
        id="buttonDefaultFilter"
        x="0"
        y="0"
        width="1108"
        height="157"
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
          radius="2.88"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_innerShadow"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="32" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.346154 0 0 0 0 0.346154 0 0 0 0 0.346154 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />

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
          result="effect2_innerShadow"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="24" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.197115 0 0 0 0 0.197115 0 0 0 0 0.197115 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow" />

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
          result="effect3_innerShadow"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="16" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.201998 0 0 0 0 0.201998 0 0 0 0 0.201998 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow" />

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
          result="effect4_innerShadow"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="12" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.735577 0 0 0 0 0.735577 0 0 0 0 0.735577 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow" />
      </filter>
    </defs>
  </svg>
);
