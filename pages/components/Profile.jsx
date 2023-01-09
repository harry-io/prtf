import React from "react";
import Image from "next/image";
const stacks = [
  { name: "TYPESCRIPT" },
  { name: "REACTJS" },
  { name: "NODE.JS" },
  { name: "JAVASCRIPT" },
  { name: "CSS" },
  { name: "REDUX" },
  { name: "CHAKRA UI" },
  { name: "GIT" },
];
const Profile = () => {
  return (
    <div className="profile_user">
      {/*  */}
      <div className="profile_user_div_a">
        <div className="profile_pic_div">
          <Image
            className="pfpicture"
            src={"https://avatars.githubusercontent.com/u/112643733?v=4"}
            alt={"pfp"}
            width={150}
            height={150}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <h2>Harikesh Kumar</h2>
        </div>
        <div>
          <p style={{ color: "grey" }}>@harry-io</p>
        </div>
        <div className="profile_div_button">
          <button>Resume</button>
          <button>Follow</button>
        </div>
      </div>

      {/*  */}
      <div className="profile_user_div_b">
        {stacks.map((stack) => (
          <p
            style={{
              fontSize: "x-small",
              background: "#21262d",
              padding: "2% 4%",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(240, 246, 252, 0.1)",
            }}
            key={stack.name}
          >
            {stack.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
