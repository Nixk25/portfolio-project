"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { AiFillPhone } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState("Send");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading("Sending..");

    setTimeout(() => {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      setFormValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setLoading("Send");
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="mb-[100px] flex justify-center items-center flex-col rounded-lg container"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full my-8 text-5xl font-bold tracking-tighter text-center leading-tighter"
      >
        Get in touch<span className="text-white ">.</span>
      </motion.h1>
      <div className="flex  justify-center items-center  w-full  mt-[100px] flex-col gap-10">
        <div className=" w-[80%]">
          <form
            className="flex flex-col flex-wrap items-center justify-center w-full gap-5"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col items-center w-full gap-5 sm:flex-row justify-evenly">
              <div className="flex items-center justify-center w-full gap-2 ">
                <input
                  className="w-full p-3 text-black border-none rounded-lg focus:outline-primary "
                  type="text"
                  name="user_name"
                  placeholder="Your Name.."
                  required
                  value={formValues.name}
                  onChange={(e) => {
                    setFormValues({ ...formValues, name: e.target.value });
                  }}
                />
              </div>
              <div className="flex items-center justify-center w-full gap-2 ">
                <input
                  className="w-full p-3 text-black border-none rounded-lg focus:outline-primary "
                  type="email"
                  name="user_email"
                  placeholder="Your Email.."
                  required
                  value={formValues.email}
                  onChange={(e) => {
                    setFormValues({ ...formValues, email: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-center w-full gap-2 ">
              <input
                className="w-full p-3 text-black border-none rounded-lg focus:outline-primary "
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formValues.subject}
                onChange={(e) => {
                  setFormValues({ ...formValues, subject: e.target.value });
                }}
              />
            </div>

            <div className="flex items-center justify-center w-full gap-2 ">
              <textarea
                className="w-full p-3 text-black border-none rounded-lg focus:outline-primary "
                name="message"
                placeholder="Write me some message.."
                required
                value={formValues.message}
                onChange={(e) => {
                  setFormValues({ ...formValues, message: e.target.value });
                }}
              />
            </div>
            <Button
              onClick={() => {
                if (formValues.name == "" && formValues.email == "") {
                  toast.error("You forgot your name and email!", {});
                } else if (formValues.name == "") {
                  toast.error("You forgot your name!", {});
                } else if (formValues.email == "") {
                  toast.error("You forgot your email!", {});
                } else {
                  setTimeout(() => {
                    toast("Message sent!", {
                      description: "We will get back to you soon",
                    });
                  }, 1000);
                }
              }}
              className="w-full cursor-pointe"
              type="submit"
            >
              {loading}
            </Button>
          </form>
        </div>
        <div className=" w-[80%] bg-primary rounded-lg overflow-hidden   p-7 text-black contact-card ">
          <h1 className="w-full mb-10 text-4xl font-bold tracking-tighter text-center sm:text-5xl leading-tighter">
            Contact Me<span className="text-white">.</span>
          </h1>
          <div className="flex flex-col w-full gap-5 p-5 ">
            <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
              <div className="flex items-center justify-center p-3 rounded-full bg-white/20 ">
                <SiMinutemailer />
              </div>
              <a className="flex" href="mailto:nicolas.melda@icloud.com">
                <span className="hidden select-none sm:flex">Email: </span>{" "}
                nicolas.melda@icloud.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center max-[500px]:justify-normal  items-center gap-5 ">
              <div className="flex items-center justify-center p-3 rounded-full bg-white/20 ">
                <AiFillPhone />
              </div>
              <a className="flex" href="tel:606 047 025">
                <span className="hidden select-none sm:flex">Phone:</span> +420
                606 047 025
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
