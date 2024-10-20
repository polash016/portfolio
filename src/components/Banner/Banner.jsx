import { Button } from "@material-tailwind/react";
import { Bounce, Fade, Flip, Hinge, Rotate, Zoom } from "react-awesome-reveal";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Banner = () => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
    <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
        <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
        <path d="M1374.829137149126 540.7337299373442L1256.769116260509 454.9581039045628 1170.9934902277278 573.0181247931796 1289.0535111163445 658.7937508259611z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float3"></path>
        <path d="M843.588,258.618C885.859,261.741,927.059,235.846,945.337,197.603C961.794,163.17,944.093,124.781,922.64,93.218C904.34,66.294,876.106,49.424,843.588,47.903C807.837,46.231,768.484,54.17,750.601,85.172C732.726,116.16,748.022,152.745,764.925,184.274C783.196,218.354,805.024,255.769,843.588,258.618" fill="rgba(28, 83, 142, 0.4)" class="triangle-float3"></path>
        <path d="M669.5142791453087 64.59311803215758L612.587874961715 159.33456451890538 707.3293214484628 216.26096870249916 764.2557256320565 121.51952221575135z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
        <path d="M467.3536530739926 345.7563533986578L547.0895008483283 368.62023982751526 541.5174066044467 237.58452495158298z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float2"></path>
        <path d="M1401.276,373.991C1420.402,372.515,1436.916,361.621,1446.455,344.978C1455.937,328.435,1457.164,308.617,1448.473,291.645C1438.915,272.98,1422.235,257.433,1401.276,256.747C1379.278,256.026,1359.921,269.611,1348.403,288.367C1336.258,308.145,1329.958,333.282,1342.152,353.029C1353.927,372.097,1378.931,375.716,1401.276,373.991" fill="rgba(28, 83, 142, 0.4)" class="triangle-float2"></path>
        <path d="M576.4742965829639 93.95622930850483L656.0934162297626 61.78801689329096 623.9252038145487-17.831102753507707 544.30608416775 14.337109661706165z" fill="rgba(28, 83, 142, 0.4)" class="triangle-float1"></path>
    </g>
    <defs>
        <mask id="SvgjsMask1000">
            <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
        <style>
            @keyframes float1 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(-10px, 0)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float1 {
                    animation: float1 5s infinite;
                }

                @keyframes float2 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(-5px, -5px)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float2 {
                    animation: float2 4s infinite;
                }

                @keyframes float3 {
                    0%{transform: translate(0, 0)}
                    50%{transform: translate(0, -10px)}
                    100%{transform: translate(0, 0)}
                }

                .triangle-float3 {
                    animation: float3 6s infinite;
                }
        </style>
    </defs>
</svg>`;
  return (
    <div
      className="w-[full] h-[600px] flex justify-items-start"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          svgContent
        )}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-6 justify-center items-center text-white pl-2 pt-2">
        <a
          className="text-3xl"
          href="https://github.com/polash016"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub></FaGithub>
        </a>
        <a
          className="text-3xl"
          href="https://linkedin.com/in/robinsarkar99"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a
          className="text-3xl"
          href="https://github.com/polash016"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook></FaFacebook>
        </a>
      </div>
      <div className="mx-auto flex flex-col gap-6 justify-center items-center text-white text-center py-6">
        <h1 className="text-2xl">
          HI, I'M{" "}
          <Bounce>
            <span className="text-5xl text-orange-700">ROBIN SARKAR</span>
          </Bounce>
        </h1>
        <p className="py-8">
          A passionate developer committed to crafting dynamic and engaging web
          applications that elevate user experiences.
          <br /> With a solid foundation in Next.js, Node.js, and PostgreSQL, I
          am dedicated to build <br /> seamless database interactions, ensuring
          performance and scalability.
        </p>
        <div className="flex gap-8">
          <a href="#project">
            <Button>Projects</Button>
          </a>
          <a
            href="https://drive.google.com/file/d/1NregxvdFayOGD8NI-miW_AnsdN-2RJh2/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            <Button>View Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
