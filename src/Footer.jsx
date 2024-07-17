import React from 'react'
import { MdOutlineHome } from "react-icons/md";
import { GoDependabot } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className=" sticky bottom-0 p-6 animate-visible sm:hidden z-20 ">
        <div className=" border rounded-full flex justify-around text-white bg-black text-xl p-4 ">
            <div>
                <Link to="/">
                <MdOutlineHome />
                </Link>
                <label className="text-xs" htmlFor="HOME"></label>
            </div>
            <div>
                <Link to="/about">
                <GoDependabot />
                </Link>
                <label className="text-xs" htmlFor="ABOUT"></label>
            </div>
            <div>
                <Link to="/project">
                <GrProjects />
                <label className="text-xs" htmlFor="PROJECT"></label>
                </Link>
            </div>
            <div>
                <Link to="/contact">
                <IoIosContact />
                </Link>
                <label className="text-xs" htmlFor="CONTACT"></label>
            </div>
            </div>
        </div>
    )
}

export default Footer
