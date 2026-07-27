interface Project {
  name: string;
  images: string[];
  description: string;
  BulletPoints: string[];
  stack: string[];
  route: string;
}

export const projects: Project[] = [
  {
    name: 'Module for collecting and processing data from the wireless network at the National University of Colombia, Bogotá campus',
    images: ['/images/Projects/GraduationProject/project1.png'],
    description: `the design and implementation of a monitoring module for the wireless network at the National University of Colombia’s Bogotá campus, with the goal of collecting, processing,
    and publishing information on the number of clients connected to the access points distributed across the campus. The solution uses the SNMP protocol to query multiple Cisco wireless controllers and was developed in Go,
    leveraging concurrency mechanisms to optimize execution times. The system transforms low-level information from the network infrastructure into consolidated data by building, through a processing workflow consisting of collection,
    processing and publication stages. As a result, a tool was developed capable of delivering up-to-date information on wireless network occupancy in less than thirty seconds, enabling it to feed visualization systems such as heat maps and facilitating network monitoring,
    analysis of usage patterns, and decision-making related to the management and expansion of the campus connectivity infrastructure.`,
    BulletPoints: [
      'Built a monitoring backend module using Golang, emphasizing concurrency to optimize execution times and ensure efficient data collection from multiple Cisco wireless controllers.',
      'Implemented a data processing workflow that transforms low-level SNMP network information into consolidated data, enabling real-time insights into wireless network occupancy.',
      'Developed a publication mechanism to deliver up-to-date information in JSON format, on wireless network occupancy in less than thirty seconds, supporting visualization systems like heat maps for effective network monitoring and decision-making.',
      'Impulsed and implemented two publication methods: a REST API and a WebSocket server, and RabbitMQ event queue following the publish-subscribe pattern, allowing for flexible data dissemination and integration with other systems.',
    ],
    stack: [
      'Golang',
      'SNMP',
      'Functional Programming',
      'RabbitMQ',
      'REST API',
      'WebSocket',
      'JSON',
      'GitHub',
    ],
    route: '/projects/graduation-project',
  },
  {
    name: 'Tech Trend Emporium',
    images: ['assets/images/project1.png'],
    description: `Tech Trend Emporium is a full-stack e-commerce application developed to provide a secure, scalable, and user-friendly online shopping experience.
    My primary contributions included developing the frontend and architecting the database, translating business requirements into an intuitive interface and a well-structured data model.
    The database was designed to efficiently support core e-commerce features such as authentication, product catalog management, shopping carts, wishlists, customer reviews, and order management.
    Through this project, I gained hands-on experience building responsive web interfaces, designing normalized database schemas, and collaborating in an Agile development environment using Git and Scrum methodologies.
    Another primary contribution of mine into this project was to face and solve the challenge of follwoing the best CICD practices and implementing a CI/CD pipeline using GitHub Actions, which automated the testing and deployment processes,
     ensuring that new features and bug fixes could be delivered quickly and reliably to production, while using AWS and Azure cloud resources. This project was implemented during my time as intern at Endava.`,
    BulletPoints: [
      'Developed the user interface using React, NextJS and styled it with TailwindCSS.',
      'Implemented the shopping cart functionality with Redux.',
    ],
    stack: [
      'Typescript',
      'NextJS',
      'TailwindCSS',
      'Redux',
      'Azure cloud',
      'Docker',
      'Swagger',
      'GitHub',
    ],
    route: '/projects/tech-trend-emporium',
  },
  {
    name: 'UNstocked',
    images: ['assets/images/project1.png'],
    description: `This is the first formal academic project i have ever worked on.
    Consists on a web app for a local business that needs to manage their inventory and sales while having the ability to:
    have an independent user account and logging in and out of it,
    manage the products and categories of the inventory,
    manage the transactions of the business and have a dashboard to visualize the related transaction data.
    The name UNstocked comes from a pun using the word stock and UN that is the prefix of the university i attended,
    UNAL (Universidad Nacional de Colombia).
    This project consists of two repositories, backend and frontend.
    The backend was developed in typescript using NodeJS and Express, while the fronted was developed in NextJS.
    The database model used was Non-relational and it was MongoDB. The mailing system was nodemailer.
    In the production of code we used cookies and JWT for the authentication system.
    The main architectural pattern used was layered architecture, in which the objective was to separate responsibilities into layers.
    On the frontend side, the main architectural pattern used was component-based architecture with atomic design using React,
    in which the objective was to create reusable components that can be easily maintained and reused.
    Finally, the deployment of the project was done using Vercel which is a convenient option for a free tier deployment.
    https://unstocked-fe.vercel.app/`,
    BulletPoints: [
      'Implemented the categories, products and transactions backend CRUD and mailing service.',
      'Designed and implemented interfaces for the data transfer objects and the database models.',
      'Refactored functions in the login and register services to use cookies and JWT for the authentication system.',
    ],
    stack: [
      'NodeJS',
      'Express',
      'MongoDB',
      'NextJS',
      'Nodemailer',
      'JWT',
      'React',
      'GitHub',
    ],
    route: '/projects/unstocked',
  },
  {
    name: 'Valracol',
    images: ['assets/images/project1.png'],
    description: `Valracol is a Colombian company that provides electric materials,
    instruments and tools for the industry market and also gives maintenance to transformers and electric generators.
    This project consists on a web app for the company that is focused on showing products with their details, allowing users
    to see them and contact the company for more information about them.
    The main architecture of the project is frontend and backend.
    The backend was developed in Typescript using Bun for performance and kysely for query building.
    The main architectural pattern used was layered architecture, in which the objective was to separate responsibilities into layers with controllers and facades.
    On the database usage, the decision was to use a relational database and the chosen one was PostgreSQL.
    Talking about the frontend, it was developed in NextJS and the main architectural pattern used was component-based architecture with atomic design,
    in which the objective was to create reusable components that can be easily maintained and reused. The framework
    used for the component oriented development was React, using and adapting components from Flowbite and TailwindCSS forthe styling.
    `,
    BulletPoints: [
      'Implemented the products and categories backend CRUD.',
      'Designed and implemented the database in PostgreSQL and applying normalization techniques to optimize the database structure.',
      'Designed and implemented React components for the navbar, footer, product cards home page.',
      'Looked for and adapted a leaflet map component to show the location of the company in the home page, later migrating to google maps API to have more control over the component.',
    ],
    stack: [
      'Bun',
      'PostgreSQL',
      'NextJS',
      'React',
      'Flowbite',
      'TailwindCSS',
      'GitHub',
    ],
    route: '/projects/valracol',
  },
  {
    name: 'Induguantes',
    images: ['assets/images/project1.png'],
    description: `Induguantes del Llano is a Colombian company that commercializes industrial security elements and products
    to guarantee the safety of workers in the industry. This project consists on a web app for the company that is focused on showing products with their details,
    allowing users to check them and contact the company for more information about them.
    The main architecture of the project is frontend and backend.
    The frontend was developed in typescript using Angular 20, with the use of bun for performance.
    Atomic design was used as the main frontend architectural pattern because it allows developers and maintainers to
    create reusable components.

    `,
    BulletPoints: [
      'Developed suitable home and products pages using components and seeking easy use and responsiveness.',
      'Implemented a map component using google maps API to show the location of the company in the home page.',

    ],
    stack: [
      'TailwindCSS',
      'Flowbite',
      'Angular',
      'Bun',
      'GitHub',
    ],
    route: '/projects/share2us',
  },
  {
    name: 'Share2us',
    images: ['assets/images/project1.png'],
    description: `Share2us is a project that consists on a web app that provides a way of sharing files between users using
    customizable links that can be protected with passwords and have an expiration date. The idea behind the project emerged by thinking
    on an easy way of sharing files rapidly without much configuration and having always the most control. It was also needy to protect
    users from malicious files, so the project also has a file scanning system that uses the VirusTotal API to scan the files uploaded by users and protect them from sharing malicious files.`,
    BulletPoints: [
      'Contributed in the creation of the backend architecture and the implementation of the file scanning system using the VirusTotal API.',
      'Fixed and added frontend features like landing page, animations, FAQ.',
      'Designed and implemented the database in PostgreSQL and applying normalization techniques to optimize the database structure.',
    ],
    stack: ['NodeJS',
            'Express',
            'PostgreSQL',
            'React',
            'VirusTotal API',
            'TailwindCSS',
            'Vercel',
            'GitHub',
          ],
    route: '/projects/share2us',
  },
  {
    name: 'Mi Ciudad a Mordiscos',
    images: ['assets/images/project1.png'],
    description: `Mi ciudad a mordiscos was an important academic project where our team and I brought to life a web application that consisted
    of a map where you could see the punctuation of restaurants, comments and menus. The main objective of the project was to provide a way of sharing opinions
    about restaurants and their food, so that users could have a better idea of where to go and what to eat. The main need was to implement it using a modular microservices architecture.`,
    BulletPoints: [
      'Worked on the implementation of the backend architecture and the database model in PostgreSQL using geographic referencing data.',
      'Contributed on the load balancer configuration using Nginx to improve the performance of the application and scalability.',
    ],
    stack: [
      'NodeJS',
      'Express',
      'Nginx',
      'Astro',
      'PostgreSQL',
      'tailwindCSS',
      'GitHub',
    ],
    route: '/projects/mcam',
  },
  {
    name: 'Portfolio',
    images: ['assets/images/project1.png'],
    description: `This is my personal portfolio website where I showcase my projects, skills, and experience. It is built with NextJS and React, and it features a modern design with a focus on user experience.
    The main objective of this project was to create a personal brand and to have a platform where I can share my work and connect with potential employers or collaborators.`,
    BulletPoints: [
      'Beautiful minimalistic design with a focus on user experience and accessibility.',
    ],
    stack: [
      'NextJS',
      'React',
      'TailwindCSS',
      'Vercel',
      'GitHub',
    ],
    route: '/projects/portfolio',
  },
];
