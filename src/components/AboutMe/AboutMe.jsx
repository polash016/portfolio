import { Progress } from "@material-tailwind/react";
import {
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaLeaf,
  FaNode,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import nextjs from "../../assets/brand-nextjs.png";
import postgres from "../../assets/postgre.png";
import prisma from "../../assets/prism.png";

const AboutMe = () => {
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
  <g mask="url(&quot;#SvgjsMask1000&quot;)" fill="none">
      <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
      <path d="M-58.76 352.6L-58.76 352.6" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-58.76 352.6L54.67 404.41" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-58.76 352.6L-55.83 490.76" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-58.76 352.6L62.59 549.43" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-58.76 352.6L226.7 393.22" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-58.76 352.6L-56.05 685.34" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-58.76 352.6L59.05 664.97" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-55.83 490.76L-55.83 490.76" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-55.83 490.76L62.59 549.43" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-55.83 490.76L54.67 404.41" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-55.83 490.76L-56.05 685.34" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-55.83 490.76L59.05 664.97" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-55.83 490.76L214.76 545.54" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-56.05 685.34L-56.05 685.34" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-56.05 685.34L59.05 664.97" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-56.05 685.34L62.59 549.43" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M-56.05 685.34L233.56 665.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M54.67 404.41L54.67 404.41" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M62.59 549.43L62.59 549.43" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M62.59 549.43L59.05 664.97" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M62.59 549.43L54.67 404.41" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M62.59 549.43L214.76 545.54" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M62.59 549.43L233.56 665.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M59.05 664.97L59.05 664.97" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M59.05 664.97L233.56 665.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M59.05 664.97L214.76 545.54" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M226.7 393.22L226.7 393.22" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M226.7 393.22L214.76 545.54" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M226.7 393.22L382.88 355.04" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M226.7 393.22L54.67 404.41" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M226.7 393.22L355.03 554.84" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M226.7 393.22L62.59 549.43" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M214.76 545.54L214.76 545.54" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M214.76 545.54L233.56 665.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M214.76 545.54L355.03 554.84" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M233.56 665.09L233.56 665.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M233.56 665.09L382.5 650.24" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M382.88 355.04L382.88 355.04" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M382.88 355.04L552.74 342.65" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M382.88 355.04L355.03 554.84" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M382.88 355.04L534.16 552.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M382.88 355.04L214.76 545.54" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M355.03 554.84L355.03 554.84" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M355.03 554.84L382.5 650.24" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M382.5 650.24L382.5 650.24" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M382.5 650.24L534.16 552.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M552.74 342.65L552.74 342.65" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M552.74 342.65L704.79 373.79" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M552.74 342.65L534.16 552.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M534.16 552.2L534.16 552.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M534.16 552.2L694.8 513.65" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M534.16 552.2L355.03 554.84" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M534.16 552.2L709.1 670.01" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M704.79 373.79L704.79 373.79" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M704.79 373.79L805.93 384.56" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M704.79 373.79L694.8 513.65" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M694.8 513.65L694.8 513.65" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M694.8 513.65L803.28 520.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M694.8 513.65L709.1 670.01" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M709.1 670.01L709.1 670.01" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M709.1 670.01L822.71 672.8" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M709.1 670.01L803.28 520.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M795.05 214.18L795.05 214.18" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M795.05 214.18L805.93 384.56" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M795.05 214.18L704.79 373.79" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M805.93 384.56L805.93 384.56" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M803.28 520.2L803.28 520.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M803.28 520.2L805.93 384.56" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M822.71 672.8L822.71 672.8" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M822.71 672.8L963.72 658.79" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M822.71 672.8L803.28 520.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M822.71 672.8L694.8 513.65" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M822.71 672.8L991.65 537.3" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M822.71 672.8L805.93 384.56" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M952.67 -75.26L952.67 -75.26" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M952.67 -75.26L1126.87 -96.5" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M952.67 -75.26L994.78 108.49" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M952.67 -75.26L1142.22 82.24" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M952.67 -75.26L991.04 238.4" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M952.67 -75.26L795.05 214.18" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M952.67 -75.26L1118.25 215.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M994.78 108.49L994.78 108.49" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M994.78 108.49L991.04 238.4" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M994.78 108.49L1142.22 82.24" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M994.78 108.49L1118.25 215.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M994.78 108.49L795.05 214.18" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M991.04 238.4L991.04 238.4" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M991.04 238.4L1118.25 215.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M991.04 238.4L1105.81 345.34" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M991.04 238.4L795.05 214.18" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M991.65 537.3L991.65 537.3" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M991.65 537.3L1097.91 557.16" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M991.65 537.3L963.72 658.79" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M963.72 658.79L963.72 658.79" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M963.72 658.79L1097.91 557.16" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M963.72 658.79L1150.05 647.42" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M963.72 658.79L803.28 520.2" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1126.87 -96.5L1126.87 -96.5" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1126.87 -96.5L1293.42 -98.95" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1126.87 -96.5L1142.22 82.24" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1126.87 -96.5L994.78 108.49" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1126.87 -96.5L1118.25 215.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1142.22 82.24L1142.22 82.24" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1142.22 82.24L1118.25 215.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1142.22 82.24L1277.76 233.68" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1118.25 215.09L1118.25 215.09" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1118.25 215.09L1105.81 345.34" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1118.25 215.09L1277.76 233.68" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1118.25 215.09L1308.7 409.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1105.81 345.34L1105.81 345.34" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1105.81 345.34L1277.76 233.68" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1097.91 557.16L1097.91 557.16" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1097.91 557.16L1150.05 647.42" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1097.91 557.16L1255.97 503.14" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1150.05 647.42L1150.05 647.42" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1150.05 647.42L1296.23 651.21" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1150.05 647.42L1255.97 503.14" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1150.05 647.42L991.65 537.3" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1150.05 647.42L1393.16 681.3" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1293.42 -98.95L1293.42 -98.95" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1293.42 -98.95L1438.93 -71.58" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1293.42 -98.95L1142.22 82.24" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1293.42 -98.95L1461.42 67.4" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1277.76 233.68L1277.76 233.68" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1277.76 233.68L1440.19 205.32" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1277.76 233.68L1308.7 409.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1308.7 409.93L1308.7 409.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1308.7 409.93L1397.44 395.91" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1308.7 409.93L1255.97 503.14" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1255.97 503.14L1255.97 503.14" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1255.97 503.14L1296.23 651.21" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1255.97 503.14L1397.44 395.91" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1296.23 651.21L1296.23 651.21" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1296.23 651.21L1393.16 681.3" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1438.93 -71.58L1438.93 -71.58" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1438.93 -71.58L1562.92 -102.97" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1438.93 -71.58L1461.42 67.4" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1461.42 67.4L1461.42 67.4" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1461.42 67.4L1560.36 104.84" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1440.19 205.32L1440.19 205.32" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1440.19 205.32L1461.42 67.4" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1440.19 205.32L1585.52 250.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1440.19 205.32L1560.36 104.84" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1440.19 205.32L1397.44 395.91" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1440.19 205.32L1308.7 409.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1397.44 395.91L1397.44 395.91" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1397.44 395.91L1462.27 504.87" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1397.44 395.91L1543.39 494.5" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1462.27 504.87L1462.27 504.87" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1462.27 504.87L1543.39 494.5" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1462.27 504.87L1564.94 646.86" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1462.27 504.87L1308.7 409.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1462.27 504.87L1393.16 681.3" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1393.16 681.3L1393.16 681.3" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1393.16 681.3L1564.94 646.86" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1393.16 681.3L1255.97 503.14" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1562.92 -102.97L1562.92 -102.97" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1560.36 104.84L1560.36 104.84" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1560.36 104.84L1585.52 250.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1560.36 104.84L1562.92 -102.97" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1560.36 104.84L1438.93 -71.58" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1560.36 104.84L1277.76 233.68" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1585.52 250.93L1585.52 250.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1585.52 250.93L1461.42 67.4" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1543.39 494.5L1543.39 494.5" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1543.39 494.5L1564.94 646.86" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1543.39 494.5L1393.16 681.3" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1543.39 494.5L1585.52 250.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1543.39 494.5L1308.7 409.93" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1564.94 646.86L1564.94 646.86" stroke="#132e65" stroke-width="1.5"></path>
      <path d="M1564.94 646.86L1296.23 651.21" stroke="#132e65" stroke-width="1.5"></path>
      <circle r="5" cx="-58.76" cy="352.6" fill="#132e65"></circle>
      <circle r="5" cx="-55.83" cy="490.76" fill="#132e65"></circle>
      <circle r="5" cx="-56.05" cy="685.34" fill="#132e65"></circle>
      <circle r="5" cx="54.67" cy="404.41" fill="#132e65"></circle>
      <circle r="5" cx="62.59" cy="549.43" fill="#132e65"></circle>
      <circle r="5" cx="59.05" cy="664.97" fill="#132e65"></circle>
      <circle r="5" cx="226.7" cy="393.22" fill="#132e65"></circle>
      <circle r="5" cx="214.76" cy="545.54" fill="#132e65"></circle>
      <circle r="5" cx="233.56" cy="665.09" fill="#132e65"></circle>
      <circle r="5" cx="382.88" cy="355.04" fill="#132e65"></circle>
      <circle r="5" cx="355.03" cy="554.84" fill="#132e65"></circle>
      <circle r="5" cx="382.5" cy="650.24" fill="#132e65"></circle>
      <circle r="5" cx="552.74" cy="342.65" fill="#132e65"></circle>
      <circle r="5" cx="534.16" cy="552.2" fill="#132e65"></circle>
      <circle r="5" cx="704.79" cy="373.79" fill="#132e65"></circle>
      <circle r="5" cx="694.8" cy="513.65" fill="#132e65"></circle>
      <circle r="5" cx="709.1" cy="670.01" fill="#132e65"></circle>
      <circle r="5" cx="795.05" cy="214.18" fill="#132e65"></circle>
      <circle r="5" cx="805.93" cy="384.56" fill="#132e65"></circle>
      <circle r="5" cx="803.28" cy="520.2" fill="#132e65"></circle>
      <circle r="5" cx="822.71" cy="672.8" fill="#132e65"></circle>
      <circle r="5" cx="952.67" cy="-75.26" fill="#132e65"></circle>
      <circle r="5" cx="994.78" cy="108.49" fill="#132e65"></circle>
      <circle r="5" cx="991.04" cy="238.4" fill="#132e65"></circle>
      <circle r="5" cx="991.65" cy="537.3" fill="#132e65"></circle>
      <circle r="5" cx="963.72" cy="658.79" fill="#132e65"></circle>
      <circle r="5" cx="1126.87" cy="-96.5" fill="#132e65"></circle>
      <circle r="5" cx="1142.22" cy="82.24" fill="#132e65"></circle>
      <circle r="5" cx="1118.25" cy="215.09" fill="#132e65"></circle>
      <circle r="5" cx="1105.81" cy="345.34" fill="#132e65"></circle>
      <circle r="5" cx="1097.91" cy="557.16" fill="#132e65"></circle>
      <circle r="5" cx="1150.05" cy="647.42" fill="#132e65"></circle>
      <circle r="5" cx="1293.42" cy="-98.95" fill="#132e65"></circle>
      <circle r="5" cx="1277.76" cy="233.68" fill="#132e65"></circle>
      <circle r="5" cx="1308.7" cy="409.93" fill="#132e65"></circle>
      <circle r="5" cx="1255.97" cy="503.14" fill="#132e65"></circle>
      <circle r="5" cx="1296.23" cy="651.21" fill="#132e65"></circle>
      <circle r="5" cx="1438.93" cy="-71.58" fill="#132e65"></circle>
      <circle r="5" cx="1461.42" cy="67.4" fill="#132e65"></circle>
      <circle r="5" cx="1440.19" cy="205.32" fill="#132e65"></circle>
      <circle r="5" cx="1397.44" cy="395.91" fill="#132e65"></circle>
      <circle r="5" cx="1462.27" cy="504.87" fill="#132e65"></circle>
      <circle r="5" cx="1393.16" cy="681.3" fill="#132e65"></circle>
      <circle r="5" cx="1562.92" cy="-102.97" fill="#132e65"></circle>
      <circle r="5" cx="1560.36" cy="104.84" fill="#132e65"></circle>
      <circle r="5" cx="1585.52" cy="250.93" fill="#132e65"></circle>
      <circle r="5" cx="1543.39" cy="494.5" fill="#132e65"></circle>
      <circle r="5" cx="1564.94" cy="646.86" fill="#132e65"></circle>
      <path d="M-57.17 712.39L-57.17 712.39" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M-57.17 712.39L106.49 687.03" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M-57.17 712.39L-44.83 515.69" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M209.78 543.07L209.78 543.07" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M209.78 543.07L189.09 646.61" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M209.78 543.07L65.28 547.41" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M209.78 543.07L378.6 526.87" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M209.78 543.07L106.49 687.03" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M209.78 543.07L373.56 648.23" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M496.39 549.18L496.39 549.18" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M496.39 549.18L518.34 642" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M496.39 549.18L378.6 526.87" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1114.25 339.83L1114.25 339.83" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1114.25 339.83L1095.31 239.89" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1114.25 339.83L987.34 359.99" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1114.25 339.83L1010.41 236.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1114.25 339.83L1261.13 382.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1114.25 339.83L1238.15 237.63" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1263.5 -96.31L1263.5 -96.31" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1263.5 -96.31L1404.99 -62.9" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1263.5 -96.31L1271.72 92.11" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1263.5 -96.31L1441.98 105.72" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1303.69 505.83L1303.69 505.83" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1303.69 505.83L1261.13 382.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1303.69 505.83L1429.43 555.72" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1303.69 505.83L1139.91 514.24" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1303.69 505.83L1460.14 383.8" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1303.69 505.83L1237.76 697.95" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1460.14 383.8L1460.14 383.8" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1460.14 383.8L1542.67 364.56" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1460.14 383.8L1444.82 249.31" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1460.14 383.8L1554.47 515.76" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1460.14 383.8L1429.43 555.72" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1429.43 555.72L1429.43 555.72" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1429.43 555.72L1554.47 515.76" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1429.43 555.72L1446.17 688.31" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1446.17 688.31L1446.17 688.31" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1446.17 688.31L1590.45 690.52" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1446.17 688.31L1554.47 515.76" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1446.17 688.31L1237.76 697.95" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1446.17 688.31L1303.69 505.83" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1590.45 690.52L1590.45 690.52" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1590.45 690.52L1554.47 515.76" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M-44.83 515.69L-44.83 515.69" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M-44.83 515.69L65.28 547.41" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M-44.83 515.69L106.49 687.03" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M-44.83 515.69L209.78 543.07" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M-44.83 515.69L189.09 646.61" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M-44.83 515.69L378.6 526.87" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M65.28 547.41L65.28 547.41" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M65.28 547.41L106.49 687.03" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M65.28 547.41L189.09 646.61" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M65.28 547.41L-57.17 712.39" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M106.49 687.03L106.49 687.03" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M106.49 687.03L189.09 646.61" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M189.09 646.61L189.09 646.61" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M189.09 646.61L373.56 648.23" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M378.6 526.87L378.6 526.87" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M378.6 526.87L373.56 648.23" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M378.6 526.87L518.34 642" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M373.56 648.23L373.56 648.23" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M373.56 648.23L518.34 642" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M373.56 648.23L496.39 549.18" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M518.34 642L518.34 642" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M518.34 642L639.43 666.5" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M518.34 642L647.06 524.64" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M651.31 393.68L651.31 393.68" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M651.31 393.68L647.06 524.64" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M651.31 393.68L795.74 369.67" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M651.31 393.68L790.86 500.07" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M647.06 524.64L647.06 524.64" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M647.06 524.64L639.43 666.5" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M647.06 524.64L790.86 500.07" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M647.06 524.64L496.39 549.18" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M639.43 666.5L639.43 666.5" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M639.43 666.5L496.39 549.18" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M639.43 666.5L832.68 691.11" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M639.43 666.5L790.86 500.07" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M795.74 369.67L795.74 369.67" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M795.74 369.67L790.86 500.07" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M790.86 500.07L790.86 500.07" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M832.68 691.11L832.68 691.11" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M832.68 691.11L1001.81 669.51" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1010.41 236.13L1010.41 236.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1010.41 236.13L1095.31 239.89" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1010.41 236.13L987.34 359.99" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M987.34 359.99L987.34 359.99" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M976.57 504.2L976.57 504.2" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M976.57 504.2L987.34 359.99" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M976.57 504.2L1139.91 514.24" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M976.57 504.2L1001.81 669.51" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1001.81 669.51L1001.81 669.51" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1001.81 669.51L1155.04 648.11" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1001.81 669.51L1139.91 514.24" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1095.31 239.89L1095.31 239.89" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1095.31 239.89L1238.15 237.63" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1095.31 239.89L987.34 359.99" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1139.91 514.24L1139.91 514.24" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1139.91 514.24L1155.04 648.11" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1139.91 514.24L1114.25 339.83" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1139.91 514.24L1261.13 382.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1155.04 648.11L1155.04 648.11" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1155.04 648.11L1237.76 697.95" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1155.04 648.11L1303.69 505.83" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1155.04 648.11L976.57 504.2" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1155.04 648.11L1261.13 382.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1271.72 92.11L1271.72 92.11" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1271.72 92.11L1238.15 237.63" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1271.72 92.11L1441.98 105.72" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1271.72 92.11L1404.99 -62.9" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1238.15 237.63L1238.15 237.63" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1238.15 237.63L1261.13 382.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1238.15 237.63L1444.82 249.31" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1238.15 237.63L1010.41 236.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1261.13 382.13L1261.13 382.13" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1261.13 382.13L1460.14 383.8" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1237.76 697.95L1237.76 697.95" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1237.76 697.95L1139.91 514.24" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1237.76 697.95L1001.81 669.51" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1404.99 -62.9L1404.99 -62.9" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1404.99 -62.9L1441.98 105.72" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1441.98 105.72L1441.98 105.72" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1441.98 105.72L1444.82 249.31" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1441.98 105.72L1603.95 61.87" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1444.82 249.31L1444.82 249.31" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1444.82 249.31L1542.67 364.56" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1603.95 61.87L1603.95 61.87" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1603.95 61.87L1404.99 -62.9" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1603.95 61.87L1444.82 249.31" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1603.95 61.87L1542.67 364.56" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1542.67 364.56L1542.67 364.56" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1542.67 364.56L1554.47 515.76" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1542.67 364.56L1429.43 555.72" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1554.47 515.76L1554.47 515.76" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <path d="M1554.47 515.76L1303.69 505.83" stroke="hsl(228.5, 77.2%, 51.5%)" stroke-width="1.5"></path>
      <circle r="25" cx="-57.17" cy="712.39" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="209.78" cy="543.07" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="496.39" cy="549.18" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="1114.25" cy="339.83" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="1263.5" cy="-96.31" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="1303.69" cy="505.83" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="1460.14" cy="383.8" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="1429.43" cy="555.72" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="1446.17" cy="688.31" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="25" cx="1590.45" cy="690.52" fill="url(&quot;#SvgjsRadialGradient1001&quot;)"></circle>
      <circle r="5" cx="-44.83" cy="515.69" fill="#8b9ad9"></circle>
      <circle r="5" cx="65.28" cy="547.41" fill="#8b9ad9"></circle>
      <circle r="5" cx="106.49" cy="687.03" fill="#8b9ad9"></circle>
      <circle r="5" cx="189.09" cy="646.61" fill="#8b9ad9"></circle>
      <circle r="5" cx="378.6" cy="526.87" fill="#8b9ad9"></circle>
      <circle r="5" cx="373.56" cy="648.23" fill="#8b9ad9"></circle>
      <circle r="5" cx="518.34" cy="642" fill="#8b9ad9"></circle>
      <circle r="5" cx="651.31" cy="393.68" fill="#8b9ad9"></circle>
      <circle r="5" cx="647.06" cy="524.64" fill="#8b9ad9"></circle>
      <circle r="5" cx="639.43" cy="666.5" fill="#8b9ad9"></circle>
      <circle r="5" cx="795.74" cy="369.67" fill="#8b9ad9"></circle>
      <circle r="5" cx="790.86" cy="500.07" fill="#8b9ad9"></circle>
      <circle r="5" cx="832.68" cy="691.11" fill="#8b9ad9"></circle>
      <circle r="5" cx="1010.41" cy="236.13" fill="#8b9ad9"></circle>
      <circle r="5" cx="987.34" cy="359.99" fill="#8b9ad9"></circle>
      <circle r="5" cx="976.57" cy="504.2" fill="#8b9ad9"></circle>
      <circle r="5" cx="1001.81" cy="669.51" fill="#8b9ad9"></circle>
      <circle r="5" cx="1095.31" cy="239.89" fill="#8b9ad9"></circle>
      <circle r="5" cx="1139.91" cy="514.24" fill="#8b9ad9"></circle>
      <circle r="5" cx="1155.04" cy="648.11" fill="#8b9ad9"></circle>
      <circle r="5" cx="1271.72" cy="92.11" fill="#8b9ad9"></circle>
      <circle r="5" cx="1238.15" cy="237.63" fill="#8b9ad9"></circle>
      <circle r="5" cx="1261.13" cy="382.13" fill="#8b9ad9"></circle>
      <circle r="5" cx="1237.76" cy="697.95" fill="#8b9ad9"></circle>
      <circle r="5" cx="1404.99" cy="-62.9" fill="#8b9ad9"></circle>
      <circle r="5" cx="1441.98" cy="105.72" fill="#8b9ad9"></circle>
      <circle r="5" cx="1444.82" cy="249.31" fill="#8b9ad9"></circle>
      <circle r="5" cx="1603.95" cy="61.87" fill="#8b9ad9"></circle>
      <circle r="5" cx="1542.67" cy="364.56" fill="#8b9ad9"></circle>
      <circle r="5" cx="1554.47" cy="515.76" fill="#8b9ad9"></circle>
  </g>
  <defs>
      <mask id="SvgjsMask1000">
          <rect width="1440" height="560" fill="#ffffff"></rect>
      </mask>
      <radialGradient id="SvgjsRadialGradient1001">
          <stop stop-color="#ffffff" offset="0.1"></stop>
          <stop stop-color="#1735b3" offset="0.2"></stop>
          <stop stop-color="rgba(23, 53, 179, 0)" offset="1"></stop>
      </radialGradient>
  </defs>
</svg>`;
  return (
    <div
      id="about"
      className="py-8 text-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          svgContent
        )}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center">
        <div className="py-4">
          <h1 className="text-2xl font-bold">About Me</h1>
          <Progress className="w-8 h-0.5 mx-auto" value={100} color="amber" />
        </div>
        <p>
          Passionate web developer with a focus on creating engaging websites.
          Seeking opportunities to contribute <br /> and collaborate on
          innovative projects that combine technical skills with seamless
          functionality.
        </p>
      </div>
      <div>
        <div className="py-6">
          <h1 className="text-center text-xl font-bold">Skills</h1>
          <Progress className="w-8 h-0.5 mx-auto" value={100} color="amber" />
        </div>
        <div className="grid grid-cols-2 w-full lg:w-[45%] mx-auto gap-6">
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-4xl text-orange-800">
              <FaHtml5></FaHtml5>
            </span>
            <p>HTML</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-4xl text-blue-800">
              <FaCss3></FaCss3>
            </span>
            <p>CSS</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-4xl text-orange-500">
              <FaJava></FaJava>
            </span>
            <p>JavaScript</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-4xl text-blue-500">
              <FaReact></FaReact>
            </span>
            <p>React</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-xl text-blue-gray-900">
              <img src={nextjs} className="w-10 h-10" />
            </span>
            <p>Next.js</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-4xl text-green-500">
              <FaNode></FaNode>
            </span>
            <p>Node Js</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-4xl text-green-500">
              <FaNodeJs></FaNodeJs>
            </span>
            <p>Express Js</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-xl text-green-800">
              <FaLeaf></FaLeaf>
            </span>
            <p>MongoDB</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-xl text-blue-gray-900">
              <img src={postgres} className="w-10 h-10" />
            </span>
            <p>PostgreSql</p>
          </div>
          <div className="flex items-center gap-6 border-2 rounded-md p-3 border-grey-700">
            <span className="text-xl text-blue-gray-900">
              <img src={prisma} className="w-10 h-10" />
            </span>
            <p>Prisma</p>
          </div>
        </div>
      </div>
      {/* <div className="w-[90%] mx-auto">
        <div><FaCode></FaCode></div>
        <div><FaGithub></FaGithub></div>
        <div></div>
      </div> */}
    </div>
  );
};

export default AboutMe;
