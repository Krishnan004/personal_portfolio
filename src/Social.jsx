import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Social = () => {
    return (
        <div className="sticky bottom-0 z-10 ">
            <div className="border-l-2 border-black h-24 absolute bottom-0 right-7 sm:right-14"></div>
            <div className="absolute right-4 sm:right-11 bottom-28 text-2xl flex flex-col gap-4">
                <a href="https://www.linkedin.com/in/krishnan-n-993939271/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="animate-appear transition delay-100" />
                </a>
                {/* <FaInstagram className="animate-appear transition delay-75" /> */}
                <a href="https://github.com/Krishnan004" target="_blank" rel="noopener noreferrer">
                <FaGithub className="animate-appear" />
                </a>
            </div>
        </div>
    );
}

export default Social;
