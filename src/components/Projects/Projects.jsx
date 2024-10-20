import { Button, Carousel, IconButton, Progress } from "@material-tailwind/react";
import summerCamp1 from "../../images/summer-camp2.png";
import summerCamp2 from "../../images/summer-camp4.png";
import summerCamp3 from "../../images/summer-camp5.png";
import summerCamp4 from "../../images/summer-camp6.png";
import toyStore1 from "../../images/toy-store.png";
import toyStore2 from "../../images/toy-store1.png";
import toyStore3 from "../../images/toy-store2.png";
import chef1 from "../../images/chef-hunter.png";
import chef2 from "../../images/chef-hunter1.png";
import chef3 from "../../images/chef-hunter2.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
  <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
      <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
      <path d="M 0,42 C 57.6,87.6 172.8,271.8 288,270 C 403.2,268.2 460.8,43 576,33 C 691.2,23 748.8,222.2 864,220 C 979.2,217.8 1036.8,14 1152,22 C 1267.2,30 1382.4,212.4 1440,260L1440 560L0 560z" fill="#184a7e"></path>
      <path d="M 0,369 C 96,383.4 288,442.8 480,441 C 672,439.2 768,351.8 960,360 C 1152,368.2 1344,457.6 1440,482L1440 560L0 560z" fill="#2264ab"></path>
  </g>
  <defs>
      <mask id="SvgjsMask1000">
          <rect width="1440" height="560" fill="#ffffff"></rect>
      </mask>
  </defs>
</svg>`;

  return (
    <div id="project"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          svgContent
        )}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-4">
        <h1 className="text-xl font-bold text-center text-white">Projects</h1>
        <Progress className="w-8 h-0.5 mx-auto" value={100} color="amber" />
        </div>
      <div className="w-[90%] mx-auto text-white py-6">
        <div className="lg:flex gap-6">
          <div className="w-full lg:w-[60%]">
            <Carousel
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 -translate-y-2/4 left-4"
                >
                  <FaArrowLeft
                    strokeWidth={2}
                    className="w-6 h-6 text-black text-opacity-50"
                  />
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 -translate-y-2/4 !right-4"
                >
                  <FaArrowRight
                    strokeWidth={2}
                    className="w-6 h-6 text-black text-opacity-50"
                  />
                </IconButton>
              )}
              className="rounded-xl"
            >
              <img
                src={summerCamp1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={summerCamp2}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={summerCamp3}
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <img
                src={summerCamp4}
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
          <div className="w-full lg:w-[40%] text-center my-auto">
            <h1 className="text-2xl font-semibold py-4 mb-8 text-center">
              Music Instrument School
            </h1>
            <p className="text-gray-600">
              Music Instrument School With Music Classes to Buy. Website Has
              Dashboard for Users, Instructor Of Class & Admin. Developed With
              React, Tailwind, Express Js, MongoDB and etc.
            </p>
            <a
              href="https://a12-summer-school.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="my-6">View Website</Button>
            </a>
          </div>
        </div>
        <div className="lg:flex gap-6 my-6">
          <div className="w-full lg:w-[60%]">
            <Carousel
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 -translate-y-2/4 left-4"
                >
                  <FaArrowLeft
                    strokeWidth={2}
                    className="w-6 h-6 text-black text-opacity-50"
                  />
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 -translate-y-2/4 !right-4"
                >
                  <FaArrowRight
                    strokeWidth={2}
                    className="w-6 h-6 text-black text-opacity-50"
                  />
                </IconButton>
              )}
              className="rounded-xl"
            >
              <img
                src={toyStore1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={toyStore2}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={toyStore3}
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
          <div className="w-full lg:w-[40%] text-center my-auto">
            <h1 className="text-2xl font-semibold py-4 mb-8 text-center">
              Toy Store
            </h1>
            <p className="text-gray-600">
              Toy Store With Various Kinds of Toys. Users Can Add Toy, Update & Delete their Toys. Developed With
              React, Tailwind, Express Js, MongoDB and etc. 
            </p>
            <a
              href="https://a11-toy-express.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="my-6">View Website</Button>
            </a>
          </div>
        </div>
        <div className="lg:flex gap-6">
          <div className="w-full lg:w-[60%]">
            <Carousel
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 -translate-y-2/4 left-4"
                >
                  <FaArrowLeft
                    strokeWidth={2}
                    className="w-6 h-6 text-black text-opacity-50"
                  />
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 -translate-y-2/4 !right-4"
                >
                  <FaArrowRight
                    strokeWidth={2}
                    className="w-6 h-6 text-black text-opacity-50"
                  />
                </IconButton>
              )}
              className="rounded-xl"
            >
              <img
                src={chef1}
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src={chef2}
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src={chef3}
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </div>
          <div className="w-full lg:w-[40%] text-center my-auto">
            <h1 className="text-2xl font-semibold py-4 mb-8 text-center">
              Chef Hunter
            </h1>
            <p className="text-gray-600">
              Chef Hunter App for Best Chefs of Restaurant & their recipes. Only Users Can View Recipes of Chefs. Developed With
              React, Tailwind, Express Js, MongoDB and etc.
            </p>
            <a
              href="https://a10-chef-hunter.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="my-6">View Website</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
