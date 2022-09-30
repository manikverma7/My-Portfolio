import Nexter from "../assets/portfolio/Nexter.png";
import Newsletter from "../assets/portfolio/Newsletter.png";
import DBZ from "../assets/portfolio/DBZ.png";
import activue from "../assets/portfolio/activue.png";
import boomn from "../assets/portfolio/boomn.png";
import ipad from "../assets/portfolio/ipad.png";
import Keeper from "../assets/portfolio/Keeper.PNG";
import delivery from "../assets/portfolio/delivery.png";

import amazon from "../assets/portfolio/amazon.png";
import angularTodo from "../assets/portfolio/todo.png";

export const portfolios = [
  {
    id: 1,
    image: activue,
    demo: "",
    code: "",
    download:
      "https://activueservicedev.azurewebsites.net/api/BuildInfo/GetBuild?fileName=6d1a7b47-eac2-40a9-a1dc-1c0ac43cb934.apk",
    techStack: ["React Native", "Redux"],
    descriptionColor: "text-black",
    title: "Activue App",
    description: [
      "• App built for Mobile (Platform- Android and Ios) and for Tablet.",
      "• Built using React native.",
      "• Used Redux for global state management.",
      "• Used youtube native api for playing youtube video in Android.",
      "• Used Youtube iframe player for playing youtube video in Ios.",
      "• Made api calls using axios library.",
      "• Used react native Ui library 'react-native-paper' for few U.I. components.",
      "• Used Signalr for providing realtime updates in the App (realtime chat,etc)",
      "• Used Firebase messaging for implementing Push Notification.",
      "• Made different U.I. designs for Mobile and Tablet App by getting device info on the runtime.",
      "• Provided feature of image upload through image cropper after asking permissions for accessing the storage of the device.",
    ],
  },
  {
    id: 2,
    image: boomn,
    demo: "",
    code: "",
    download:
      "https://drive.google.com/file/d/1qSuPtlQpXEHGClq4r0e5XPoPZT5jRKLw/view?usp=sharing",
    techStack: ["React Native", "Redux"],
    descriptionColor: "text-black",
    title: "Boomn App",
    description: [
      "• App built for Mobile (Platform- Android)",
      "• Built using React native.",
      "• Used Redux for global state management.",
      "• Used Agora's api(s) for providing live video streaming and network calling feature.",
      "• Made api calls using axios library.",
      "• Used react native Ui library 'react-native-paper' for few U.I. components.",
      "• Used Socket.io for providing realtime updates in the App (realtime chat, profile updates, etc)",
      "• Used Firebase messaging for implementing Push Notification.",
      "• Provided Social media login feature of Google , Facebook and LinkedIn login",
      "• Provided feature of image upload through image cropper after asking permissions for accessing the storage of the device.",
      "•  Provided feature of image capture through device's camera after asking permissions for accessing the camera of the device",
    ],
  },
  {
    id: 3,
    image: ipad,
    demo: "",
    code: "",
    download:
      "https://www.dropbox.com/s/vxyi94ez51taalr/Ipad-Tutorial.apk?dl=0",
    techStack: ["React Native"],
    description: ["A Mobile App built using React native and Redux"],
    descriptionColor: "text-black",
    title: "Ipad Tutorial App",
  },
  {
    id: 34,
    image: delivery,
    demo: "",
    code: "https://github.com/manikverma7/delivery-app",
    download:
      "https://drive.google.com/file/d/1fNkZdEtaa1cdJzRS_1kwkMQFzRVdIzqd/view?usp=sharing",
    techStack: ["React Native"],
    description: ["A Mobile App built using React native and Redux"],
    descriptionColor: "text-black",
    title: "Food delivery demo App",
  },
  {
    id: 12,
    image: amazon,
    demo: "https://clone-3a842.web.app/",
    code: "https://github.com/manikverma7/amazon-clone",
    download: "",
    techStack: ["React", "Context Api", "Firebase"],
    description: [
      "Am Amazon demo clone built using React, Firebase, material-ui and Context Api",
    ],
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
    description: ["A Todo List website built using React and Hooks"],
    descriptionColor: "text-black",
    title: "Keeper Website",
  },
  {
    id: 8,
    image: DBZ,
    demo: "https://dragon-ball-blog.netlify.app/",
    code: "https://github.com/manikverma7?tab=repositories",
    download: "",
    techStack: ["Nextjs", "Css3", "Cms"],
    description: [
      "A blog website regarding Dragon Ball Anime series built using Nextjs and Cms",
    ],
    descriptionColor: "text-black",
    title: "Dragon Ball Blog",
  },
  {
    id: 9,
    image: angularTodo,
    demo: "https://631a545b3395970e6b76df94--comfy-sopapillas-a195b4.netlify.app/",
    code: "https://github.com/manikverma7/angular-todoapp",
    download: "",
    techStack: ["Angular", "Scss"],
    description: ["A Todo List website built using Angular."],
    descriptionColor: "text-black",
    title: "Todo List",
  },

  // {
  //   id: 5,
  //   image: Trillo,
  //   demo: "https://elastic-fermat-b44af6.netlify.app/",
  //   code: "https://github.com/manikverma7/Trillo-FlexBox",
  //   download: "",
  //   techStack: ["HTML5", "Scss", "Flexbox"],
  //   description: ["A webpage built using Html5, Scss and Flexbox"],
  //   descriptionColor: "text-pink-600",
  //   title: "Trillo Webpage",
  // },
  {
    id: 6,
    image: Nexter,
    demo: "https://sleepy-shockley-045280.netlify.app/",
    code: "https://github.com/manikverma7/Nexter-CSS-Grids",
    download: "",
    techStack: ["HTML5", "Scss", "Grid"],
    description: ["A webpage built using Html5, Scss and Grid"],
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
    description: [
      "A signup webpage built using Html5, Css, Javascript and MongoDb",
    ],
    descriptionColor: "text-black",
    title: "Newsletter Signup Page",
  },
];
