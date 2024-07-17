import React, { useState } from 'react';
import project1 from './images/images.png';
import project2 from './images/codsoftimage.jpg';
import project3 from './images/download (2).png';

const Career = () => {
    const [career, setCareer] = useState([
        {
            id: 1,
            image_src: project1,
            name: "Spangles",
            role: "Web Developer",
            duration: "MAY 20, 2024 - PRESENT",
            content1: "Creating interactive real-world websites for the technical department.",
            content2: "Focused on React.js, JavaScript, Tailwind CSS, Express.js, and MySQL.",
            content3: "Specializing in full-stack web development."
        },
        {
            id: 2,
            image_src: project2,
            name: "CodSoft",
            role: "Java Programming",
            duration: "MAY 1, 2024 - JUNE 5, 2024",
            content1: "Gained hands-on experience in Java development.",
            content2: "Learned key concepts such as object-oriented programming, data structures, and algorithms.",
            content3: "Acquired knowledge of software development best practices."
        },
        {
            id: 3,
            image_src: project3,
            name: "Cybernaut",
            role: "Tech Trio program",
            duration: "APRIL 1, 2024 - PRESENT",
            content1: "Focusing on three core languages: C++, Java, and Python.",
            content2: "Enhancing proficiency in multiple programming paradigms.",
            content3: "Developing skills in object-oriented, procedural, and scripting techniques."
        },
    ]);

    return (
        <div className="relative z-10">
            <h1 className="absolute top-14 sm:top-0 left-10 text-6xl sm:text-9xl font-black opacity-10">CAREER</h1>
            <div className="h-12"></div>

            <div className="sm:grid grid-cols-2 gap-12 m-20 leading-loose">
                {career.map(item => (
                    <div key={item.id} className="relative border-l drop-shadow-xl p-4">
                        <img src={item.image_src} alt={`${item.name} logo`} className="absolute -left-10 top-0 size-24 object-cover rounded-xl" />
                        <div className="size-24"></div>
                        <h1 className="text-xl font-semibold">{item.name}</h1>
                        <h2 className="text-xl font-medium">{item.role}</h2>
                        <div className="font-thin">{item.duration}</div>
                        <div className="space-y-2">
                            <li>{item.content1}</li>
                            <li>{item.content2}</li>
                            <li>{item.content3}</li>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Career;
