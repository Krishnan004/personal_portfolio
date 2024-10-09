import React from 'react';
import project1 from './images/image (2).png';
import project2 from './images/Screenshot (69).png';
import project3 from './images/Screenshot (93).png';

import { SourceMapGenerator } from 'source-map-js';

const projects = [
    {
        id:1,
        img: project1,
        heading:"Invoice Genarator",
        description: " Enabled efficient invoice and quotation generation",
        stack:"React js Tailwind css",
        link: "https://main--spinvoice.netlify.app/"
    },
    {
        id:2,
        img: project2,
        heading:"E-commerce",
        description: " enhancing user experience and business efficiency",
        stack:"React js Tailwind css Express js Mysql",
        link: "https://e-commerce-dev-web.netlify.app/"
    },
    {
        id:3,
        img: project3,
        heading:"E-commerce-admine",
        description: " enhancing accessibility  and business efficiency",
        stack:"React js Tailwind css Express js Mysql",
        link: "https://e-panel.netlify.app/"
    },
    // Add more project objects as needed
];

const Project = () => {
    return (
        <div className="relative sm:h-screen z-30 p-2  ">
        <h1 className="absolute -top-5  sm:left-10 text-6xl sm:text-9xl font-black opacity-10 ">PROJECT</h1>
        <div className="h-3 sm:h-12"></div>
        <div className="flex  overscroll-auto flex-wrap gap-4 p-2 sm:p-4 animate-appear sm:animate-page">
            {projects.map((project) => (
                <div key={project.id} className="flex flex-col justify-around  border-2 w-80 rounded-tl-2xl rounded-br-2xl p-6 drop-shadow-xl bg-white/20  hover:scale-105 backdrop-blur-sm">
                    <img src={project.img} className="h-32 w-full border-t rounded-xl" alt="Project"/>
                    <h1 className="font-semibold">{project.heading}</h1>
                    <p className="">{project.description}</p>
                    <p className="text-xs leading-loose">stack: {project.stack}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" >
                    <button className="p-2  bg-black rounded-xl text-xs text-white ">Project Link</button>
                    </a>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Project;
