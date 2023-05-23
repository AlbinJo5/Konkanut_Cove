import { Fade } from "react-reveal";
import { Size } from "../constants/size";
import { useMediaQuery } from "../hooks/media-query";
import Carousel1 from "./carousel1";
import Carousel2 from "./carousel2";
import Carousel3 from "./carousel3";
import DescriptionComp from "./description-comp";
import ScrollProgress from "./scroll-progress";

const DescriptionSmall = ({ sections }) => {
  return (
    <div className="flex py-10">
      <ScrollProgress height="450px" n={sections.length * 2} />

      <div className="flex flex-col grow">
        {sections.map(({ desc, carousel }, index) => {
          const ctype = carousel.type;
          const Carousel =
            ctype === 1 ? Carousel1 : ctype === 2 ? Carousel2 : Carousel3;

          return (
            <div className="flex flex-col w-full" key={index}>
              <div className="flex items-center   max-h-[450px]">
                <DescriptionComp
                  {...desc}
                  button={{ name: "View Packages", href:desc.href }}
                  classNames={["ml-5"]}
                  alignLeft={true}
                />
              </div>
              <div className="flex items-center min-h-[450px]  w-full">
                <Carousel data={carousel.images} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DescriptionLarge = ({ sections }) => {
  const desc = sections.map(({ desc }) => desc);
  const carousel = sections.map(({ carousel }) => carousel);
  return (
    <div className="flex justify-center  items-center">
      <ul className="flex flex-col ">
        {sections.map(({ desc, carousel }, i) => {
          const ctype = carousel.type;
          const Carousel =
            ctype === 1 ? Carousel1 : ctype === 2 ? Carousel2 : Carousel3;

          if (i % 2 === 0)
            return (
              <Fade bottom key={i}>
                <li className="flex items-center min-h-[450px]">
                  <DescriptionComp
                    {...desc}
                    button={{
                      name: desc.button,
                      href: desc.href,
                    }}
                    classNames={["ml-5"]}
                    alignLeft={true}
                  />
                </li>
              </Fade>
            );
          else
            return (
              <Fade bottom key={i}>
                <li className="flex items-center min-h-[450px]  ">
                  <Carousel data={carousel.images} />
                </li>
              </Fade>
            );
        })}
      </ul>

      <Fade bottom>
        <ScrollProgress height="450px" n={sections.length} />
      </Fade>

      <ul className="flex flex-col ml-10">
        {sections.map(({ desc, carousel }, i) => {
          const ctype = carousel.type;
          const Carousel =
            ctype === 1 ? Carousel1 : ctype === 2 ? Carousel2 : Carousel3;

          if (i % 2 !== 0)
            return (
              <Fade bottom>
                <li className="flex items-center min-h-[450px]">
                  <DescriptionComp
                    {...desc}
                    button={{
                      name: desc.button,
                      href: desc.href,
                    }}
                    classNames={["ml-5"]}
                    alignLeft={false}
                  />
                </li>
              </Fade>
            );
          else
            return (
              <Fade bottom>
                <li className="flex items-center min-h-[450px] w-full">
                  <Carousel data={carousel.images} />
                </li>
              </Fade>
            );
        })}
      </ul>
    </div>
  );
};

export default function Description({ sections }) {
  const isSmall = useMediaQuery(0, Size.md);
  if (isSmall) {
    return <DescriptionSmall sections={sections} />;
  }
  return <DescriptionLarge sections={sections} />;
}
