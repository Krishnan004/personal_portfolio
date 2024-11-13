import React from 'react';
import profile from './images/profile.png';
import Project from './Project';
import Career from './Career';
import Social from './Social';

const TypingText = () => {
  return (
    <span className="inline-block border-r-4 border-black whitespace-nowrap overflow-hidden animate-typing ">
      I'm Krishnan
    </span>
  );
};

const Home = () => {
  return (
    <div >
    <div className="sm:py-16 grid grid-cols-1 sm:grid-cols-2 sm:h-screen ">
      <div className="justify-self-center animate-page1">
      <div className="flex flex-col gap-4 p-8 ">
        <h1 className="text-4xl sm:text-5xl">Hi</h1>
        <label className="text-4xl sm:text-5xl ">
          <TypingText />
        </label>
        <p className="w-80 leading-loose">
        passionate web developer skilled in creating dynamic web applications. Ready to seize opportunities to empower myself and contribute innovative solutions.       </p>
        <div className="flex">
        <a href="https://drive.google.com/file/d/1yp7YH0zs2k-OMjzE7oBVn4xk71Wm7T11/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
        <button className="p-2 text-white bg-black rounded-xl animate-expand hover:animate-none">Resume</button>
        </a>
        </div>
        </div>
      </div>
      <div className="m-6 relative row-start-1 sm:col-start-2 justify-self-center sm:w-1/2  overflow-hidden animate-page">
  <img className="border-2 rounded-full size-60 sm:size-80 animate-appear  " src={profile} alt="profile" />
  <div className="border-b-8 border-slate-50 rounded-full animate-spin size-60 sm:size-80 absolute top-0 ">
  </div>
</div>
    </div>
    <Project/>
    <Career/>
    <Social/>
    </div>
  );
};

export default Home;
