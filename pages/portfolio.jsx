import React from "react";
import Profile from "./components/Profile";
import axios from "axios";
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

const Portfolio = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="pf_main_container">
        {/*  */}
        <div className="pf_main_container_div_a">
          <Profile />
        </div>
        {/*  */}
        <div className="pf_main_container_div_b">
          <div className="pf_main_container_div_b_a">EDUCATION</div>
          <div className="pf_main_container_div_b_b">
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
              PROJECTS
            </h1>
            <div className="projectsDiv">
              {/*  */}
              {projects.map((project) => (
                <ProjectCard key={project.id} data={project} />
              ))}
              {/*  */}
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};
export async function getStaticProps() {
  let response = await axios.get(
    `https://api.github.com/search/repositories?q=user:harry-io+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  return {
    props: {
      items: response.data,
    },
  };
}
export default Portfolio;
