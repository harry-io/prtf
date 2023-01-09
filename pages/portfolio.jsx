import React from "react";
import Profile from "./components/Profile";
import axios from "axios";
import ProjectCard from "./components/ProjectCard";

const Portfolio = ({ items }) => {
  const projects = items.items;
  console.log(projects);
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
