"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { AiFillPhone } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { useToast } from "./ui/use-toast";

const Contact = () => {
  const form = useRef();
  const { toast } = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0v4xwrp",
      "template_y9cyuxx",
      form.current,
      "yFTxlqz53gxh2h1cQ"
    );
  };

  return (
    <section
      id="contact"
      className="mb-[100px] flex justify-center items-center flex-col rounded-lg"
    >
      <h1 className="text-5xl font-bold leading-tighter tracking-tighter text-center my-10 w-full">
        Get in touch<span className="text-white">.</span>
      </h1>
      <div className="flex  justify-center items-center lg:justify-normal lg:items-start w-full lg:w-[70%] mt-[100px] lg:flex-row flex-col gap-10">
        <div className="lg:w-[50%] w-[80%]">
          <form
            className="flex flex-col flex-wrap justify-center items-center gap-5 w-full"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col sm:flex-row justify-evenly items-center gap-5  w-full">
              <div className=" flex gap-2 justify-center items-center w-full">
                <input
                  className="p-3 border-none text-black rounded-lg focus:outline-primary w-full "
                  type="text"
                  name="from_name"
                  placeholder="Your Name.."
                  required
                />
              </div>
              <div className=" flex gap-2 justify-center items-center w-full">
                <input
                  className="p-3 border-none text-black rounded-lg focus:outline-primary w-full "
                  type="email"
                  name="user_email"
                  placeholder="Your Email.."
                  required
                />
              </div>
            </div>

            <div className=" flex gap-2 justify-center items-center w-full">
              <input
                className="p-3 border-none text-black rounded-lg focus:outline-primary w-full "
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>

            <div className=" w-full flex gap-2 justify-center items-center">
              <textarea
                className="p-3 border-none w-full text-black rounded-lg focus:outline-primary "
                name="message"
                placeholder="Write me some message.."
                required
              />
            </div>
            <Button asChild>
              <input
                onClick={() => {
                  toast({
                    title: "Message sent!",
                    description: "We will get back to you soon",
                  });
                }}
                className="w-full cursor-pointer"
                type="submit"
                value="Send"
              />
            </Button>
          </form>
        </div>
        <div className="lg:w-[50%] w-[80%] bg-primary rounded-lg ml-0  p-10 h-full  ">
          <h1 className="text-5xl font-bold leading-tighter tracking-tighter text-center mb-10 w-full">
            Contact Me<span className="text-white">.</span>
          </h1>
          <div className="flex justify-center items-center pl-5 gap-5 flex-col">
            <div className="flex justify-center items-center gap-5">
              <div className="bg-white/20 rounded-full p-3 flex justify-center items-center">
                <SiMinutemailer />
              </div>
              <span>Email: nicolas.melda@icloud.com</span>
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="bg-white/20 rounded-full p-3 flex justify-center items-center">
                <AiFillPhone />
              </div>
              <span>Phone: +420 606 047 025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
