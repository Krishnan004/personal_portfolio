import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jys6c7o', 'template_b812cve', form.current, 'G1oFZxcsuLykHFQkP')
      .then(
        () => {
          toast.success('Sucessfully Send', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="relative h-screen p-6 sm:p-0">
      <h1 className="absolute -top-5 sm:left-10 text-6xl sm:text-9xl font-black opacity-10">CONTACT</h1>
      <div className="sm:h-12"></div>
      <form ref={form} onSubmit={sendEmail} className="border-2 border-black h-fit rounded-tl-2xl rounded-br-2xl flex flex-col gap-6 sm:w-1/2 bg-transparent p-6 sm:p-20 backdrop-blur-sm animate-visible drop-shadow-xl m-auto">
        <input type="email" placeholder="Email_id" name="from_email" className="border-b border-black bg-transparent" required />
        <input type="text" placeholder="Subject" name="from_subject" className="border-b border-black bg-transparent" required />
        <textarea name="message" cols="20" rows="5" placeholder="Message" className="border border-black bg-transparent" required />
        <button type="submit" className="text-white px-4 py-2 bg-black rounded-xl transition-all">Send Email</button>
        
      </form>
      <ToastContainer />
    </div>
  );
};
