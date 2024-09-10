"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

  const [success,setSuccess] = useState(false);
  const [error,setError] = useState(false);
  const form = useRef(null);
  const sendEmail = (e:React.FormEvent) => {
    // e.preventDefault();
    // setError(false);
    // setSuccess(false);

    // emailjs
    //   .sendForm(
    //     "service_4i7fvh8",
    //     "template_cfl38ao",
    //     form.current,
    //     {
    //       publicKey: "0t25nGXoegTBGMaL6",
    //     }
    //   )
    //   .then(
    //     () => {
    //       setSuccess(true);
    //       form.current.reset()
    //     },
    //     (error) => {
    //       setError(true)
    //     }
    //   )

    
  };
  const text = "Say Hello";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}

        <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center text-6xl">
          <div>
            {text.split("").map((letter: string, index: number) => (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                key={index}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Form Container */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-1/2 lg:h-full lg:w-1/2  bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Kennedy ,</span>
          <textarea
            name="user_message"
            id=""
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          ></textarea>
          <span>My email address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />

          <span>Regards</span>

          <button className=" bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>

          {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
          {error && <span className="text-red-600 font-semibold">Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
