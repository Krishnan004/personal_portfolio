import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Social = () => {
    return (
        <div className="sticky bottom-0 z-0 ">
            <div className="border-l-2 border-black h-24 absolute bottom-0 left-7 sm:left-14"></div>
            <div className="absolute left-4 sm:left-11 bottom-28 text-2xl flex flex-col gap-4">
                <a href="https://www.linkedin.com/in/krishnan-n-993939271/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="animate-appear transition delay-100" />
                </a>
                <FaInstagram className="animate-appear transition delay-75" />
                <a href="https://github.com/Krishnan004" target="_blank" rel="noopener noreferrer">
                <FaGithub className="animate-appear" />
                </a>
            </div>
        </div>
    );
}

export default Social;
