import Nexter from "../assets/portfolio/Nexter.png";
import Trillo from "../assets/portfolio/Trillo.png";
import Newsletter from "../assets/portfolio/Newsletter.png";
import DBZ from "../assets/portfolio/DBZ.png";
import activue from "../assets/portfolio/activue.png";
import boomn from "../assets/portfolio/boomn.png";
import cyber from "../assets/portfolio/cyber.png";
import Keeper from "../assets/portfolio/Keeper.PNG";
import amazon from "../assets/portfolio/amazon.png";

export const portfolios = [
  {
    id: 1,
    image: activue,
    demo: "",
    code: "",
    download:
      "https://activueservicedev.azurewebsites.net/api/BuildInfo/GetBuild?fileName=6d1a7b47-eac2-40a9-a1dc-1c0ac43cb934.apk",
    techStack: ["React Native", "Redux"],
    description: "A Mobile App built using React native and Redux",
    descriptionColor: "text-black",
    title: "Activue App",
  },
  {
    id: 2,
    image: boomn,
    demo: "",
    code: "",
    download:
      "https://drive.google.com/file/d/1qSuPtlQpXEHGClq4r0e5XPoPZT5jRKLw/view?usp=sharing",
    techStack: ["React Native", "Redux"],
    description: "A Mobile App built using React native and Redux",
    descriptionColor: "text-black",
    title: "Boomn App",
  },
  {
    id: 3,
    image: cyber,
    demo: "",
    code: "",
    download:
      "https://drive.google.com/file/d/1hxZyALcl_DAvRAUzCT4Yf1E5HqphMN2X/view?usp=sharing",
    techStack: ["React Native"],
    description: "A Mobile App built using React native and Redux",
    descriptionColor: "text-black",
    title: "Cyber Security Demo App",
  },
  {
    id: 12,
    image: amazon,
    demo: "https://clone-3a842.web.app/",
    code: "https://github.com/manikverma7/amazon-clone",
    download: "",
    techStack: ["React", "Context Api", "Firebase"],
    description:
      "Am Amazon demo clone built using React, Firebase, material-ui and Context Api",
    descriptionColor: "text-black",
    title: "Amazon Clone Demo",
  },
  {
    id: 4,
    image: Keeper,
    demo: "https://beamish-sundae-f3f39c.netlify.app/",
    code: "https://github.com/manikverma7/Keeper-App-React",
    download: "",
    techStack: ["React", "Hooks"],
    description: "A Todo List website built using React and Hooks",
    descriptionColor: "text-black",
    title: "Keeper Website",
  },
  {
    id: 5,
    image: Trillo,
    demo: "https://elastic-fermat-b44af6.netlify.app/",
    code: "https://github.com/manikverma7/Trillo-FlexBox",
    download: "",
    techStack: ["HTML5", "Scss", "Flexbox"],
    description: "A webpage built using Html5, Scss and Flexbox",
    descriptionColor: "text-pink-600",
    title: "Trillo Webpage",
  },
  {
    id: 6,
    image: Nexter,
    demo: "https://sleepy-shockley-045280.netlify.app/",
    code: "https://github.com/manikverma7/Nexter-CSS-Grids",
    download: "",
    techStack: ["HTML5", "Scss", "Grid"],
    description: "A webpage built using Html5, Scss and Grid",
    descriptionColor: "text-white",
    title: "Nexter Website",
  },
  {
    id: 7,
    image: Newsletter,
    demo: "https://still-fortress-99285.herokuapp.com/",
    code: "https://github.com/manikverma7?tab=repositories",
    download: "",
    techStack: ["HTML5", "Css3", "Javascript"],
    description:
      "A signup webpage built using Html5, Css, Javascript and MongoDb",
    descriptionColor: "text-black",
    title: "Newsletter Signup Page",
  },
  {
    id: 8,
    image: DBZ,
    demo: "https://dragon-ball-blog.netlify.app/",
    code: "https://github.com/manikverma7?tab=repositories",
    download: "",
    techStack: ["Nextjs", "Css3", "Cms"],
    description:
      "A blog website regarding Dragon Ball Anime series built using Nextjs and Cms",
    descriptionColor: "text-black",
    title: "Dragon Ball Blog",
  },
];
