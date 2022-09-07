import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Heading from "./Heading";

function Experience() {
  const experiences = [
    {
      title: "DAVIET, Jalandhar, Punjab",
      subTitle: "Bachelor's Degree",
      body: "Electronics & Communications",
      icon: <SchoolIcon />,
      date: "2015 - 2019",
    },
    {
      title: "Content Editor",
      subTitle: "Tutorzone, Jalandhar, Punjab",
      body: "Wrote content in english to help Video Lecturers explain physics topics till 10th standard in video lectures.",
      icon: <WorkIcon />,
      date: "Mar 2019 - Aug 2020",
    },

    {
      title: "Frontend Developer Trainee",
      subTitle: "Nugen I.T. Services, Jalandhar, Punjab",
      body: "Built a number of demo projects using Html, Css, Javascript and React.js",
      icon: <WorkIcon />,
      date: "Oct 2019 - Mar 2020",
    },
    {
      title: "Home Tutor",
      subTitle: "Star Tutorials, Jalandhar, Punjab",
      body: "Taught Maths, Science and Coding to Students till 10th class.",
      icon: <WorkIcon />,
      date: "Nov 2019 - Aug 2020",
    },
    {
      title: "Software Engineer (Frontend Developer)",
      subTitle: "Benytsys, Mohali, Punjab",
      body: "Built a number of Websites & Mobile Apps by working in following technologies : HTML5, Css3, Javascript, React, React-Native, Angular, Nest.js",
      icon: <WorkIcon />,
      date: "Aug 2020 - Present",
    },
  ];
  return (
    <div
      name="Experience"
      className="w-full min-h-screen md:min-h-min text-white bg-gradient-to-b from-slate-900 to-slate-700 pt-20 md:pt-0 z-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
        <Heading title="Experience Timeline" />

        <VerticalTimeline lineColor="#3e497a">
          {experiences.map(({ title, subTitle, body, icon, date }) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--education  "
              date={date}
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={icon}
              contentStyle={{
                background: "#445266",
                color: "#fff",
              }}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                {title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
              <p> {body}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
