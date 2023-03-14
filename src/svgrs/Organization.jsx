import * as React from "react";
const SvgOrganization = (props) => (
  <svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#Organization_svg__a)" d="M0 0h33v33H0z" />
    <defs>
      <pattern
        id="Organization_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#Organization_svg__b" transform="scale(.01042)" />
      </pattern>
      <image
        id="Organization_svg__b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5klEQVR4nO2ZMU7EMBREp0BcBST2qIAW0F6FCk4BXAS2Y9GglVLQULD2Z+zoPWnKOMmM//+OIgEAAAAAAAAAAPzORtJW0qukvSQPrv3yrNvl2aflXNJO0tcApvpEHSQ9LO8yFccHfh7AQHfS02wh7AYwzZ11r0nYLKXrlekg6UoTcDeAWS7SrSbgbQCjXKQXTcDHAEa5SO+aAK9cw5M2yASQN8lUQN4o04LWqeFJG2QCyJtkKiBvlGlBNT3Wxdf/x/+G4xf1jaTLDi2/+wu2rj96AD/1uQRxpo4QgP7swWPPEAhAJ3lwrAQCULYdXVABis6EawLQ/P8bmAHK/m/wytVK9fpxg0wAeZNMBeSNcpGqO0T5DWZXKwQgAojvYlMBeSNNCzqtx7qxR6cDGn4GVL+ACYAATAWIFkQLEjPADGGGsDkFiWNo+uPKHY/J1cfo5hvMrlYIQAQQ38WmAvJGmhaUN9PMgPnUSvX6cYNMALU7zMXXV1fI8BVQ/QImAAIwFSBaEC1IzAAzhBnC5hQkjqHpjyt3PCZXH6ObbzC7WiEAEUB8F5sKyBtpWlDeTDMD5lMr1evHDTIB5E3yxKICRADxXWgqIG+EaUF5MxwQM0AEEN+FpgLyRnjWFgQAAAAAAAAAAFoF30CzRWPwl0o5AAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);
export default SvgOrganization;

