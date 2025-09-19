export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiences", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Creating performant, maintainable web apps with smooth UX.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a React/Next.js Web App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "items-center justify-center text-center md:max-w-full ",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "React & Spring Boot Blog App",
    description:
      "Full-stack blogging platform built with React for a dynamic, SEO-friendly frontend and Spring Boot for a robust backend API.",
    img: "/p3.svg",
    link: "https://github.com/OneOmar/blog-app-backend",
  },
  {
    id: 2,
    title: "E-commerce Websites (YouCan Platform)",
    description:
      "Developed and optimized e-commerce sites on the YouCan platform to boost user experience and conversion rates, integrating analytics for data-driven improvements.",
    img: "/p2.svg",
    link: "https://github.com/OneOmar/youcan-ecommerce",
  },
  {
    id: 3,
    title: "React Real Estate App",
    description:
      "Responsive real estate web app developed with React and SASS, featuring an intuitive interface for property browsing.",
    img: "/real-estate-app.webp",
    link: "https://github.com/OneOmar/real-estate-app",
  },
  {
    id: 4,
    title: "Restaurant Fiasco",
    description:
      "Responsive restaurant website mockup featuring HTML & CSS. Showcases menu pages, recipe previews, and image galleries with clean layout and visual design.",
    img: "/restaurant-fiasco.webp",
    link: "https://github.com/OneOmar/Restaurant_Fiasco/",
  }
];

export const experiences = [
  {
    id: 1,
    title: "Remote Coding Expert – Outlier (Upwork Project)",
    desc: "Provided coding expertise in JavaScript, Java, and Python to help train generative AI models. Crafted and evaluated code solutions, reviewed AI-generated code, and delivered detailed feedback in French to improve large language models.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Web Developer – NATUP / BS Outdoor",
    desc: "Created precise HTML/CSS mockups, built responsive interactive features with React and TailwindCSS, improved performance and ensured cross-browser compatibility. Implemented rigorous testing to ensure robust code and encourage best-practice development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "E-commerce Web Developer – COD Network",
    desc: "Designed and developed YouCan e-commerce websites focused on UX and conversions. Integrated interactive features, optimized site speed and reliability, and implemented analytics with the marketing team for data-driven strategy.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "PFE Intern – Jacobs Engineering SA (Jesa)",
    desc: "Completed final engineering project in Laayoune, Morocco",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const phases = [
  {
    title: "Planning",
    order: "Phase 1",
    description: `Define goals, target users and main features. Choose the tech stack and design the database structure.`,
    effectProps: {
      animationSpeed: 5.1,
      containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    },
  },
  {
    title: "Development",
    order: "Phase 2",
    description: `Build the frontend with React/Next.js and the backend with Spring Boot or Node.js. Ensure clean code and smooth data flow.`,
    effectProps: {
      animationSpeed: 3,
      containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
  },
  {
    title: "Testing",
    order: "Phase 3",
    description: `Run unit and integration tests, optimize performance and ensure cross-browser compatibility.`,
    effectProps: {
      animationSpeed: 3,
      containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
      colors: [[125, 211, 252]],
    },
  },
  {
    title: "Deployment",
    order: "Phase 4",
    description: `Deploy the application, configure hosting and provide documentation for a smooth handover.`,
    effectProps: {
      animationSpeed: 3,
      containerClassName: "bg-purple-700 rounded-3xl overflow-hidden",
      colors: [[196, 181, 253]],
    },
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/OneOmar",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "#",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/omar-el-manssouri/",
  },
];
