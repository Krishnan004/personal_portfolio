import React from 'react';
import project2 from './images/aboutprofile.jpg';

const About = () => {
    return (
        <div className="relative sm:flex p-12 gap-8 sm:h-screen ">
            <h1 className="absolute -top-5 right-10 text-6xl sm:text-9xl font-black opacity-10">ABOUT</h1>
            <div className=" sm:h-12"></div>
            <img src={project2} alt="Profile" className="sm:size-80 rounded-full"/>
            <div className="leading-loose flex flex-col gap-6 border-2 border-black p-6 backdrop-blur-sm sm:basis-2/3 animate-heightvisible overflow-hidden ">
                <p>Hi, I'm Krishnan, a passionate and skilled web developer currently pursuing a Bachelor of Computer Applications (BCA). With a strong foundation in computer science and hands-on experience in web development, I am dedicated to creating dynamic, user-friendly, and efficient web applications.</p>
                <p>Throughout my academic and professional journey, I have honed my skills in various web technologies, including React, Tailwind CSS, and MySQL. I have successfully completed several projects, such as developing e-commerce websites and interactive web applications, which have enhanced my understanding and expertise in full-stack development.</p>
                <p>I am currently interning as a React developer, where I am responsible for building and maintaining web applications, ensuring seamless user experiences, and integrating front-end components with back-end services. My internship has provided me with invaluable industry insights and practical experience, allowing me to work on real-world projects and collaborate with seasoned professionals.</p>
            </div>
        </div>
    );
};

export default About;
