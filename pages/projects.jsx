import React from "react";
import ProjectCard from "./components/ProjectCard";
const projects = [
  {
    id: 1,
    name: "ga-todo-app",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/ga-todo-app",
  },
  {
    id: 2,
    name: "harry-io",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/harry-io",
  },
  {
    id: 3,
    name: "harry-io.github.io",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/flowery-blow-7094",
  },
  {
    id: 4,
    name: "flowery-blow-7094",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/skypeiaApiV2",
  },
  {
    id: 5,
    name: "skypeiaApiV2 ",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/skypeiaApiV2",
  },
  {
    id: 6,
    name: "eminent-trucks-727",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/skypeiaApiV2",
  },
  {
    id: 7,
    name: "expedia",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/skypeiaApiV2",
  },
  {
    id: 8,
    name: "desktop-tutorial",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/skypeiaApiV2",
  },
  {
    id: 9,
    name: "starter-rest-api ",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/skypeiaApiV2",
  },
  {
    id: 10,
    name: "wide-song-7469 ",
    details: "blah",
    techStack: "JavaScript",
    link: "https://github.com/harry-io/skypeiaApiV2",
  },
];

const Projects = () => {
  return (
    <div>
      <div
        className="projectsDiv"
        style={{ marginTop: "100px", border: "none" }}
      >
        {/*  */}
        {projects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
