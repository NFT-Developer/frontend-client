import { chakra, HTMLChakraProps, useToken } from '@chakra-ui/react';

export default function TheSandboxLogo() {
  return (
    <chakra.svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      w="5"
      h="5"
      viewBox="0 0 50 50"
    >
      <style>
        {
          '\
        .st0 {\
          fill: url(#SVGID_1_);\
        }\
        .st1 {\
          fill: #FFFFFF;\
        }\
        .stop0 {\
          stop-color: #00ADEF;\
        }\
        .stop1 {\
          stop-color: #0084FF;\
        }\
      '
        }
      </style>

      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="25.2144"
        y1="1024.8223"
        x2="25.8374"
        y2="1024.1193"
        gradientTransform="matrix(50 0 0 -50 -1250 51250)"
      >
        <stop offset="0" className="stop0" />
        <stop offset="1" className="stop1" />
      </linearGradient>
      <circle className="st0" cx="25" cy="25" r="25" />
      <path
        className="st1"
        d="M16.6,11.8l-2.7,2.7v10.7l2.7,2.7h10.7v5.4H22v-2.7h-8.1v5.4l2.7,2.7h16.1l2.7-2.7V25.2l-2.7-2.7H22v-5.4h5.4
	v2.7h8.1v-5.4l-2.7-2.7H16.6z"
      />
    </chakra.svg>
  );
}
