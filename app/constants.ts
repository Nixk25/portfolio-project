import { FaLinkedin, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
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

export const PROJECTS = [
  {
    name: "Topeto",
    description:
      "A modern website for the music band Topeto. Includes sections like About, Concerts, and Contact. Clean, responsive design made to support the band’s image.",
    image: "/projectImages/topeto.webp",
    url: "https://topeto.vercel.app",
    githubUrl: "https://github.com/Nixk25/topeto",
  },
  {
    name: "Posterio",
    description:
      "Posterio is an online gallery where designers can share and explore posters. It includes features like sign-in, color detection, and a clean interface. Created as a school project to showcase both design and coding skills.",
    image: "/projectImages/posterio.webp",
    url: "https://posterioproject.vercel.app/",
    githubUrl: "https://github.com/Nixk25/posterio",
  },

  {
    name: "Loom",
    description:
      "Loom is a creative site showcasing street art with cool scrolling effects and animations. Users can explore artworks, artists, and posts in a fun and interactive way.",
    image: "/projectImages/loom.webp",
    url: "https://loomproject.vercel.app/",
    githubUrl: "https://github.com/Nixk25/loom",
  },
  {
    name: "Éclat Gallery",
    description:
      "A stylish and modern online gallery to display global artwork. Smooth animations and a clear layout make for a pleasant browsing experience.",
    image: "/projectImages/gallery.webp",
    url: "https://gallery-theta-seven.vercel.app/",
    githubUrl: "https://github.com/Nixk25/gallery",
  },
  {
    name: "TNR-Band",
    description:
      "A website for the band TNR-Band where the admin can log in and manage concerts. It automatically moves past events to the archive. Made for a real client, with focus on practical use.",
    image: "/projectImages/tnrband.webp",
    url: "https://tnr-band.vercel.app",
    githubUrl: "https://github.com/Nixk25/Eda",
  },
  {
    name: "CashMate",
    description:
      "CashMate is an app that helps people understand and manage their money better. It includes tips, dashboards, and tools to track spending. Still in progress, with more features to come.",
    image: "/projectImages/cashmate.webp",
    url: "https://cashymate.vercel.app/",
    githubUrl: "https://github.com/Nixk25/cashmate",
  },
];
