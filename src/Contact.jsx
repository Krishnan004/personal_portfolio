import React from 'react'

const Contact = () => {

    
    return (
        <div className="relative h-screen p-6 sm:p-0">
        <h1 className="absolute -top-5  left-10 text-6xl sm:text-9xl font-black opacity-10 ">CONTACT</h1>
        <div className="h-12"></div>
            <form className="border-2 border-black h-fit rounded-tl-2xl rounded-br-2xl flex flex-col gap-6  sm:w-1/2  bg-transparent p-6 sm:p-20 backdrop-blur-sm animate-visible drop-shadow-xl m-auto">
            <input type="email" className="border-b border-black bg-transparent " placeholder="Email_id"/>
            <input type="text" className="border-b border-black bg-transparent" placeholder="Subject"/>
            <textarea name="message" id="" cols="20" rows="5 " placeholder="Message " className="border border-black bg-transparent "></textarea>
            <button className="text-white px-4 py-2 bg-black rounded-xl  transition-all">
            Send
            </button>
            </form>
        </div>
    )
}

export default Contact
