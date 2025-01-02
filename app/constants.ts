import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIALS = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/nicolas-melda-424b7224b/",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Nixk25",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/nickmelda/",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/nick.melda.7",
  },
  {
    icon: MdOutlineAttachEmail,
    href: "mailto:nicolas.melda@icloud.com",
  },
];

export const WORKS = [
  {
    title: "Frontend development",
  },
  {
    title: "UI/UX design",
  },
  {
    title: "Web apps",
  },
  {
    title: "Graphic design",
  },
  {
    title: "Animations",
  },
];

export const SKILLS = [
  {
    skills: [
      {
        name: "Tailwind CSS",
        image: "/photo1.webp",
      },
      {
        name: "React",
        image: "/photo2.webp",
      },
      {
        name: "Next.js",
        image: "/photo3.webp",
      },
    ],
  },
  {
    skills: [
      {
        name: "Typescript",
        image: "/photo4.webp",
      },
      {
        name: "Motion",
        image: "/photo5.webp",
      },
      {
        name: "Frontend",
        image: "/photo6.webp",
      },
    ],
  },
  {
    skills: [
      {
        name: "Animations",
        image: "/photo7.webp",
      },
      {
        name: "Web Design",
        image: "/photo8.webp",
      },
      {
        name: "UI/UX",
        image: "/photo9.webp",
      },
    ],
  },
];
