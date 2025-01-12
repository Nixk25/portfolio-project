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
    name: "Loom",
    description:
      "Loom is a website built with Next.js, React, and TypeScript, designed as a creative platform for showcasing street art. The site featuresinteractive scroll animations and dynamic visua creating an engagingand immersive experience. Users can explore trend artworks, artists,and posts.",
    image: "/projectImages/loom.webp",
    url: "https://loomproject.vercel.app/",
    githubUrl: "https://github.com/Nixk25/loom",
  },
  {
    name: "Éclat Gallery",
    description:
      "Éclat Gallery is built with Next.js, Framer Motion, Tailwind CSS, and shadcn/ui. It features interactive animations and a clean, modern design. The gallery showcases artwork from global artists with a focus on performance and user experience.",
    image: "/projectImages/gallery.webp",
    url: "https://gallery-theta-seven.vercel.app/",
    githubUrl: "https://github.com/Nixk25/gallery",
  },
  {
    name: "CashMate",
    description:
      "CashMate is a financial education web application developed with Next.js, TypeScript, and Tailwind CSS, designed to help users manage their finances smarter and more effectively. It includes features like a guided onboarding process, personalized dashboards, and tools for tracking spending and investments. CashMate aims to improve financial literacy by offering users insightful and easy-to-use tools. This is an ongoing, complex project with continuous development to introduce advanced features and refine the user experience.",
    image: "/projectImages/cashmate.webp",
    url: "https://cashymate.vercel.app/",
    githubUrl: "https://github.com/Nixk25/cashmate",
  },
  {
    name: "Cookify",
    description:
      "Cookify is a web app for culinary enthusiasts with a demo login:email: admin@example.com password: adminadmin Built with Next.js, Tailwind CSS, Node.js, MongoDB, and NextAuth.js. It allows users to explore and manage recipes. The app features a user-friendly interface and a user management system for personalized experiences, enabling users to save their favorite recipes.",
    image: "/projectImages/cookify.webp",
    url: "https://coookify.vercel.app",
    githubUrl: "https://github.com/Nixk25/rocnikovy-projekt",
  },
  {
    name: "TNR-Band",
    description:
      "TNR-Band, my recent commercial project, harmonizes Next.js, Next-auth, MongoDB, Node.js, Tailwind CSS, Shadcn. After login you can add, remove or edit concerts, also concerts are automatically transfered to previous concerts. Login is hidden because only admin can use it.",
    image: "/projectImages/tnrband.webp",
    url: "https://tnr-band.vercel.app",
    githubUrl: "https://github.com/Nixk25/Eda",
  },
  {
    name: "HouseFix",
    description:
      "  HouseFix is my first web project, which was created as a site for an imaginary construction company. The project uses basic technologies including HTML5, CSS3 and animate.css. This website is used to showcase a fictional construction company and its services.",
    image: "/projectImages/housefix.webp",
    url: "https://nixk25.github.io/build",
    githubUrl: "https://github.com/Nixk25/build",
  },
];
