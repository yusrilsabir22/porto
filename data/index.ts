export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experiences" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learn about AI",
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
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Grafoinsight PRO",
    des: "Generate reports within a minute",
    img: "/grafoinsight.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/chatgpt.svg", "/next-auth.svg"],
    link: "https://grafoinsight.pro",
  },
  {
    id: 2,
    title: "Mysic - Music Applications",
    des: "Music app with Swift, Express leveraging web scraping techniques, and integrating Python for audio transcription",
    img: "/mysic.png",
    iconLists: ["/swift.svg", "/node-js.svg", "/python.svg", "/ts.svg", "/spider.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Mobile Monitoring Application",
    des: "Monitor ATM machines across various locations. It includes a mobile application for officers to manage assigned tasks effectively",
    img: "/android-monitoring-system.png",
    iconLists: ["/android.svg", "/kotlin.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Laravel - Monitoring System",
    des: "Monitor ATM machines across various locations. It includes a mobile application for officers to manage assigned tasks effectively",
    img: "/monitoring-system.png",
    iconLists: ["/php.svg", "/laravel.svg", "/postgresql.svg", "/tail.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "I worked on developing and maintaining systems using Python, Node.js, and Java Android, focusing on scalable and efficient solutions. I was involved in the development of an automated large-scale data scraping system and utilized Docker and Kubernetes for containerization, ensuring robust deployment and orchestration of applications across various environments.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    desc: "As a Fullstack Developer at Grafologi Indonesia, I worked on designing and implementing end-to-end web solutions. My responsibilities included developing scalable backend services, creating interactive user interfaces, and ensuring seamless integration between frontend and backend systems to support business operations effectively.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance React Native Developer",
    desc: "I collaborated with clients to build cross-platform mobile applications using React Native, delivering seamless user experiences and tailored features that aligned with specific business needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Engineer",
    desc: " I led a small team by performing code reviews, managing task assignments, and elaborating on project requirements to ensure smooth collaboration and successful delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/yusrilsabir22"
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   url: ""
  // },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/m-yusril-sabir"
  },
];
