import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    passgen,
    countdown,
    movie,
    recipe,
    githubapp,
    drawing,
    unilogo,
    projesoft,
    newmind,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  const experiences = [
    {
      title: "Bachelor of Science in Computer Engineering",
      company_name: "Istanbul Commerce University",
      icon: unilogo,
      iconBg: "#383E56",
      date: "September 2020 - Present",
      points: [
        "Studying a comprehensive curriculum covering hardware, software, and systems design.",
        "Exploring programming languages such as C++, Java, and Python for various applications.",
        "Gaining hands-on experience with microcontrollers and embedded systems.",
        "Analyzing algorithms and data structures to optimize software performance.",
        "Collaborating with multidisciplinary teams to solve complex engineering problems.",
        "Participating in workshops and projects to enhance problem-solving skills.",
      ],
    },
    {
      title: "Hardware Intern",
      company_name: "Projesoft",
      icon: projesoft,
      iconBg: "#E6DEDD",
      date: "August 2022 - September 2022",
      points: [
        "Gained valuable insights into the e-commerce industry's hardware requirements and challenges.",
        "Engaged in cross-functional discussions with software engineers to ensure seamless hardware-software integration.",
        "Conducted research on emerging hardware technologies to support future product development.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "NewMind",
      icon: newmind,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        "I had chance to use frameworks like React.js, Three.js, axios etc.",
        "Expanded understanding of front-end development principles and practices through hands-on projects and learning opportunities.",
        "Explored innovative approaches and techniques to improve website interactivity and functionality.",
        "Adhered to established coding standards and followed version control processes to maintain a structured development environment.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Password Generator",
      description:
        "Simple password generator design. Passwords stored in local storage and can be shown if desired.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: passgen,
      source_code_link: "https://github.com/abatuhan20/password-generator",
    },
    {
      name: "Countdown Timer",
      description:
        "Example site for how much time left for the new year.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: countdown,
      source_code_link: "https://github.com/abatuhan20/countdown-timer",
    },
    {
      name: "Movie App",
      description:
        "It shows popular movies and has a search bar and description functionality. Also it uses TheMovieDB API.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "TheMovieDB API",
          color: "orange-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://github.com/abatuhan20/movie-app",
    },
    {
      name: "Recipe App",
      description:
        "Shows recipes with descriptions also you are able to search your favorite food and add it to your favourite list. It uses TheMealDB API",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "TheMealDB API",
          color: "orange-text-gradient",
        },
      ],
      image: recipe,
      source_code_link: "https://github.com/abatuhan20/recipe-app",
    },
    {
      name: "Github App",
      description:
        "You can search Github Profiles and see their info, repos.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Github API",
          color: "orange-text-gradient",
        },
      ],
      image: githubapp,
      source_code_link: "https://github.com/abatuhan20/github-app",
    },
    {
      name: "Drawing App",
      description:
        "Simple app for drawing onto a canvas. You can change your brush size and color, clean the canvas as well. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: drawing,
      source_code_link: "https://github.com/abatuhan20/drawing-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };