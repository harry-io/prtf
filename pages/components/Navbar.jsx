import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_i">
        <Link href={"/portfolio"}>Harikesh Kumar</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/details"}>Details</Link>
      </div>
    </div>
  );
};

export default Navbar;
