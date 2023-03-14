import * as React from "react";
const SvgAirport = (props) => (
  <svg
    width={34}
    height={34}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#Airport_svg__a)" d="M0 0h34v34H0z" />
    <defs>
      <pattern
        id="Airport_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#Airport_svg__b" transform="scale(.01042)" />
      </pattern>
      <image
        id="Airport_svg__b"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADOklEQVR4nO2dO2gUURSGP2LQ4AttlAiGYKFCfEFQLCztNJVaqpW2KW0tU4lBUexCStvUWglqo4jGVBIFTaOFxiioG48MnoVlIY/N3Jk7M/f/4ECqPfecf8/9ZzKXWRBCCCGEEEKI6nMUmATeAEse2d+3gSOxF9dktgD3gGXAVogWcBfYHHuxTWz+41Ua3x2PJEJY7vfQ/HbcCbyGpPf85Q0IkG1HI7EX3wQmN9D8dtyKvfgmMJtDgNexF98EvucQYDH24puA5QwhAeqNaQIkQNKYJkACJI1pAiRA0pgmQAIkjWkCJEDSmCZAAiSNaQIkQNKYJkACJI1pAiRAkgwC0wEmYAbYH7uYOtEHXAe+BWh+O7IDvDeATbGLqzrHgKcBG98dL4CTsYusIluBm8CvApvfjj9+2m5H7KKrwjngfQmN745PwAUSZjCQyYYw6SESogiTtZyRjEkfB55VoOGWmklnJjvhBmgVj2XgQZNM+nwkk7UAJn2RGlMVk7XUTLqKJms540ddTLrqJms54yVwigqbbKsCTbLUTLquJmt1N+mmmKzVzaSbaLJWF5M+ATyvQMGWmkmXbbKznu+M58/zWSP+7XwC/C3RpHeGav4Y8KHgRbe8QVmjDnblz/vZnQz59pnt279LMOkrIQQoaoE/vRFZQ/YWmH8ldgOX/EJiscA6KyXAFy84K3x7SfnXwwBw1p+ULTRNgHkvLCuwP0L+jVzljfoj0rm6CjDrBYxGym8BG3AAGM9h4rnpxUTHCziDY7G/gR3scWOd6eEAQW5Wu/mY8QXtCpGoBgJ0ss2vEDNP+1qWAJ894Zi/x60MrKICdNLv9yyZ130MnX/Ob4pOu0GVjdVAgE76vFcT3rvaYzUToHGYBJAASWOaAAmQNKYJkABJY5oACZA0pgmQAEljmoA4DOR8dX07pv1fx6IHDgGvAjS/HW/1Az/r53LOV9avdgrjmsag+C3HtCX1zuHAW85aMee/TSP4/0x5qcTmd25J2aGw5LHIkTwmAeolwALw0LeP7NDUPj/qmJ1IfqcJCC/AQlfD16JXQZLHcjY8ryDJMw9MAVeB4RK6Mey5pjy3EEIIIYQQQlAm/wB7kGt4SU2gaAAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
);
export default SvgAirport;

