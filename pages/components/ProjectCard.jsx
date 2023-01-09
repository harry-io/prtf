import Link from "next/link";
import React from "react";
import { FaRegFolder, FaStar } from "react-icons/fa";

const ProjectCard = ({ data }) => {
  console.log(data.html_url);
  const redirect = (url) => {
    window.location.href = `${url}`;
  };
  return (
    <div className="project_card" onClick={() => redirect(data.html_url)}>
      <div className="project_card_a">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <h2
            style={{
              color: "#4d91de",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {" "}
            <FaRegFolder style={{ color: "white" }} /> {data.full_name}
          </h2>
          <span
            style={{
              fontSize: "small",
              background: "#21262d",
              padding: "1% 4%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Public
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="color"></div>
            <p>{data.language}</p>
          </div>
          <div>
            <p>Updated 3 days ago</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="project_card_b">
        <Link
          href={"/"}
          style={{
            fontSize: "small",
            background: "#21262d",
            padding: "1% 4%",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaStar />
          <p>Star</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
